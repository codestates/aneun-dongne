import React, { useState, useEffect } from "react";

import { Styled } from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { defaultcomments, deleteCommentmode, token, kToken, loginState, loginModal } from "../../recoil/recoil";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import axios from "axios";
import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";
import LikeLoading from "../Loading/LikeLoading";

function Comments({ uuid, img, nickname, text, initialTags, date, editable, contentId }) {
  const [clickedBtn, setClickedBtn] = useState("");
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  //editMode가 전역변수면 모든댓글창이 영향을받는다.
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(text);
  //로긴상태,로긴모달
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  //
  const [changeOrNot, setChangeOrNot] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const setDefaultComment = useSetRecoilState(defaultcomments);
  const [prevComment, setPrevComment] = useState(text);
  const setDeleteOrNot = useSetRecoilState(deleteCommentmode);
  //댓글로딩
  const [commentLoading, setCommentLoading] = useState(false);
  //

  // console.log(initialTags);
  useEffect(() => {
    //text,initialTags초기화
    setComment(text);
    setTags(initialTags);
  }, [text, initialTags]);

  useEffect(() => {
    setPrevComment(text);
  }, []);

  //! 이것도 서버에서하래 유저권한 관련된건 다 서버에서 토큰이랑 비교후 결정
  // const editable = nickname === username; //

  function getCommentId(e) {
    // e.preventDefault(); //필요한가?
    //누른 버튼의 className으로 실행되는 함수가 결정된다.

    setClickedBtn(e.target.className);
  }

  useEffect(() => {
    if (clickedBtn === "delete-comment") {
      deleteComment();
    }
    if (clickedBtn === "complete-change") {
      completeChange();
    }
    if (clickedBtn === "change-comment") {
      changeComment();
    }
  }, [clickedBtn]);
  // console.log(tags.map((el) => el.substr(0, el.length - 1)));

  // 댓글 삭제요청 보내는 함수
  async function deleteComment() {
    setCommentLoading(true);
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}/comment/${contentId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken || kakaoToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          params: { commentId: uuid },
        }

        //! axios에선 params지만 express에선 req.query래요.
        //! 전송되는 url은 https://localhost:80/126508/?commentId=18  이래요
        // { params: { commentId: uuid }, withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.data);
        let arr = res.data.data.map((el) => {
          console.log(el.comments.comment_tags.split(","));
          console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        console.log(arr);
        setDefaultComment(arr);
        setDeleteOrNot(true);
      });
    setClickedBtn("");
    setCommentLoading(false);
  }
  function changeComment() {
    setPrevComment(comment);
    setEditMode(true);
    console.log(editMode);
  }
  async function completeChange() {
    console.log(tags, comment);
    const body = {
      commentId: uuid, //댓글아뒤
      commentContent: comment, //댓글내용
      tagsArr: tags, //해시태그
    };
    setCommentLoading(true);

    await axios
      .patch(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("코맨트로딩", commentLoading);
        let arr = res.data.data.map((el) => {
          console.log(el.comments.comment_tags.split(","));
          console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        console.log(arr);
        setDefaultComment(arr);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoginOpen(true);
        }
      });

    // if (editMode) console.log("수정완료");
    // else console.log("댓글수정 클릭");

    setEditMode(false);

    setClickedBtn("");
    setCommentLoading(false);
  }
  //댓글 바꾸는 함수
  const ChangeHandler = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    setComment(prevComment);
    setEditMode(false);
    setClickedBtn("");
  }, [changeOrNot]);
  // useEffect(() => {

  // }, [commentLoading]);

  return (
    <>
      <Styled.Comment>
        <Styled.Profile>
          <Styled.ProfileImg src={img}></Styled.ProfileImg>
          <Styled.NickName>{nickname}</Styled.NickName>
        </Styled.Profile>
        <Styled.ContentBox>
          {commentLoading ? (
            <div>
              <LikeLoading />
            </div>
          ) : (
            <>
              {!editable ? (
                <Styled.Content name="comment" className="comment-read">
                  {text}
                </Styled.Content>
              ) : (
                <Styled.ContentInput>
                  {!editMode ? (
                    <div id="comment-read" className="comment-read" name="comment">
                      <span>{comment}</span>
                    </div>
                  ) : (
                    <textarea
                      id="comment-change"
                      type="text"
                      // value={comment}
                      defaultValue={prevComment}
                      onChange={(e) => ChangeHandler(e)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          completeChange();
                        }
                      }}
                      name="comment"
                    />
                  )}
                </Styled.ContentInput>
              )}
              <>
                {!editable ? (
                  <></>
                ) : (
                  <>
                    {!editMode ? (
                      <Styled.BtnWrapper>
                        <button
                          className="change-comment"
                          onClick={(e) => {
                            getCommentId(e);
                          }}
                        >
                          수정하기
                        </button>
                        <button type="submit" className="delete-comment" onClick={(e) => getCommentId(e)}>
                          댓글삭제
                        </button>
                      </Styled.BtnWrapper>
                    ) : (
                      <Styled.BtnWrapper>
                        <button className="complete-change" onClick={(e) => getCommentId(e)}>
                          수정완료
                        </button>
                        <button className="get-back" onClick={() => setChangeOrNot(!changeOrNot)}>
                          수정취소
                        </button>
                      </Styled.BtnWrapper>
                    )}
                  </>
                )}
              </>
              <Styled.HashTagWrapper>
                {/* 편집못함? -> 읽기만가능한해시태그 안에 props로 다른사람의 해시태그 전달
            편집가능? -> 수정못함? : 읽기만가능한 해시태그안에 props로 나의 해시태그 전달
            편집가능? -? 수정가능? : 수정가능한 해시태그  */}
                {editable ? (
                  editMode ? (
                    <EditableHashTag tags={tags} setTags={setTags} uuid={uuid} />
                  ) : (
                    <OnlyReadHashTag initialTags={tags} uuid={uuid} /> //
                  )
                ) : (
                  <OnlyReadHashTag initialTags={initialTags} uuid={uuid} />
                )}
              </Styled.HashTagWrapper>
            </>
          )}
          <Styled.Date>작성날짜 : 2016.08.09{date}</Styled.Date>
        </Styled.ContentBox>
      </Styled.Comment>
    </>
  );
}
// function PropsEqual(prev, next) {
//   console.log(prev.text === next.text);
//   return prev.text === next.text;
// }
export default React.memo(Comments);
// export default Comments;
