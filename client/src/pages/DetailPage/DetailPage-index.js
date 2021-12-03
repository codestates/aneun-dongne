import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MapInRoom from "../../components/kakao-map/MapInRoom/MapInRoom-index";
import notImageYet from "../../images/not-image-yet.png";
import { Styled } from "./style";

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
  console.log("pathname찍어봤음", pathname);
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
      </Styled.Div>
    </>
  );
}

export default DetailPage;

const keywordDummy = ["#왕릉", "#공원"];
