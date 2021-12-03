import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MapInRoom from "../../components/kakao-map/MapInRoom/MapInRoom-index";
import notImageYet from "../../images/not-image-yet.png";
import { Styled } from "./style";
import KeyWordCommon from "../../components/KeyWordCommon";
import CommentCommon from "../../components/CommentCommon";
function DetailPage({ match }) {
  const { id } = match.params;
  const contentId = parseInt(id, 10);

  const [overview, setOverview] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [placeAddr, setPlaceAddr] = useState("");
  const [title, setTitle] = useState("");
  const [placeLocation, setPlaceLocation] = useState({ lon: 0, lat: 0 });
  const [readMore, setReadMore] = useState(false);
  const { pathname } = useLocation();
  const [like, setLike] = useState(77); //나중에 서버로부터 받아오게 된다.
  const [likeOrNot, setLikeOrNot] = useState(true);
  useEffect(() => {
    // 페이지 이동시 스크롤 맨 위로 오게한다.
    window.scrollTo(0, 0);
    axios
      .get(
        `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?serviceKey=W%2B9SSMZKirmvzGAhoiAssJvfD9PYntkIlyMO6niTjMi5nwx%2BrUP%2FiQqrLccqOmuxPU2w7iyFQkUC41ddNiePUg%3D%3D`,
        {
          params: {
            MobileOS: "ETC",
            MobileApp: "TourAPI3.0_Guide",
            areaCode: 33,
            sigunguCode: 7,
            cat1: "A01",
            defaultYN: "Y",
            firstImageYN: "Y",
            areacodeYN: "Y",
            catcodeYN: "Y",
            addrinfoYN: "Y",
            mapinfoYN: "Y",
            overviewYN: "Y",
            contentId: contentId,
            //   contentTypeId:el.contenttypeid

            // pageNo:2,
          },
        },
        { "content-type": "application/json" }
        //withCrentials:'true'는 Access-Control-Allow-Origin :'*'일때 사용하면 안된다.
      )
      .then((res) => {
        // console.log(res.data.response.body.items.item);
        const { mapx, mapy } = res.data.response.body.items.item;
        // console.log(mapx, mapy);
        setPlaceLocation({ lat: mapy, lon: mapx });
        setImgURL(res.data.response.body.items.item.firstimage);
        setTitle(res.data.response.body.items.item.title);
        setPlaceAddr(res.data.response.body.items.item.addr1);
        if (res.data.response.body.items.item.homepage) {
          setPageURL(res.data.response.body.items.item.homepage.split('<a href="')[1].split('"')[0]);
          // setPageURL(res.data.response.body.items.item.homepage);
        }
        setOverview(res.data.response.body.items.item.overview);

        // ?
      });
  }, [pathname]);

  // console.log(pageURL);
  // console.log(title, placeAddr, imgURL);

  const overView = overview.replace(/(<([^>]+)>)/gi, "");
  let FirstOverView = overView.slice(0, 130);
  let SecondOverView = overView.slice(130);

  const readMoreHandler = () => {
    //readMore=true일때는 더보기, false일때는 간략히 버튼이 보이게 함
    setReadMore(!readMore);
  };

  //! 이 글에 내가 좋아요를 눌렀는지 싫었는지도 DB에 저장해야할듯
  //! 초기화 안되게
  const LikeHandler = () => {
    setLikeOrNot(!likeOrNot);
    //좋아요한 상태면 -1
    if (likeOrNot) setLike(like - 1);
    else setLike(like + 1);
  };
  return (
    <>
      <Styled.Div>
        <Styled.Address>{placeAddr}</Styled.Address>
        <Styled.Title>{title}</Styled.Title>
        {pageURL ? (
          <Styled.PageURL href={pageURL} target="_blank" title={`새창 : ${title}`}>
            홈페이지로 이동
          </Styled.PageURL>
        ) : null}
        {imgURL ? <Styled.Img src={imgURL} /> : <Styled.Img src={notImageYet} />}
        {overView ? (
          // !이거 css로 할수있대 나중에 ㄱ
          <Styled.Overview>
            <span className="first-overview">{FirstOverView}</span>
            <Styled.ReadMoreBtn className={!readMore ? null : "hide"} onClick={readMoreHandler}>
              ...더보기
            </Styled.ReadMoreBtn>
            <span className={readMore ? null : "hide"}>{SecondOverView}</span>
            <Styled.CutDownBtn className={readMore ? null : "hide"} onClick={readMoreHandler}>
              간략히
            </Styled.CutDownBtn>
          </Styled.Overview>
        ) : null}
        <MapInRoom placeLocation={placeLocation} placeAddress={placeAddr} title={title} />
        <KeyWordCommon keywordDummy={keywordDummy} />
        <Styled.LikeBtn onClick={LikeHandler}>
          <i class={likeOrNot ? "fas fa-heart" : "hide"}></i>
          <i class={likeOrNot ? "hide" : "far fa-heart"}>{like}</i>
        </Styled.LikeBtn>
        <CommentCommon commentDummy={commentDummy}></CommentCommon>
      </Styled.Div>
    </>
  );
}

export default DetailPage;

const keywordDummy = ["#왕릉", "#공원"];

const commentDummy = [
  {
    img: "/people1.png",
    nickname: "류준열",
    comment: "안녕하세요",
    keyword: ["안녕하세요", "감사해요", "잘있어요", "다시만나요"],
    data: "2021-12-03", //형식 모르겠음 db보고 결정
  },
  {
    img: "/people1.png",
    nickname: "윤해용",
    comment: "팀장이에요",
    keyword: ["안녕하세요", "감사해요", "잘있어요", "다시만나요"],
    data: "2021-12-03", //형식 모르겠음 db보고 결정
  },
];
