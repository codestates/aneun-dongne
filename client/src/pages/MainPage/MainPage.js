import React from "react";
import { useHistory } from "react-router-dom";
import Review from "../../components/Review/Review";
import { Icon } from "react-icons-kit";
import { angleDoubleDown } from "react-icons-kit/fa/angleDoubleDown";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

import { Styled } from "./style";

AOS.init();

function MainPage() {
  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };

  const ToScrollBottom = (e) => {
    window.scroll({
      top: 800,

      behavior: "smooth",
    });
  };

  return (
    <>
      <Styled.Body>
        <Styled.MainTitleView>
          <img src="/images/look.gif" muted autoPlay loop playsInline />
          <div className="main-title">
            <div className="title">어디론가 떠나고 싶으신가요?</div>
            <Styled.StartButton onClick={ToHome}>시작하기</Styled.StartButton>
            <div className="icons">
              <Icon size={100} icon={angleDoubleDown} onClick={ToScrollBottom} />
            </div>
          </div>
        </Styled.MainTitleView>

        <Styled.PopularTitleView className="populartitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">우리 동네에서 인기있는 관광지는?</div>

          <Styled.VideoContainer>
            <Styled.Image>
              <img className="illust" src="images/mapclick.png" />

              <img className="play-popular" src="/images/location03.gif" muted autoPlay loop playsInline />
            </Styled.Image>
          </Styled.VideoContainer>
        </Styled.PopularTitleView>

        <Styled.FocusTitleView className="focustitle" data-aos="fade-right" data-aos-duration="1000">
          <div className="title">여러분의 관심사에 알맞는 관광지를 찾아드릴 수 있어요.</div>
          <Styled.VideoContainer>
            <Styled.Image>
              <img className="play-focus" src="/images/hashtag02.gif" muted autoPlay loop playsInline />
              <img className="illust" src="images/mapimgpeople.png" />
            </Styled.Image>
          </Styled.VideoContainer>
        </Styled.FocusTitleView>

        <Styled.DiyTitleView className="diytitle" data-aos="fade-left" data-aos-duration="1000">
          <div className="title">그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수 있어요.</div>
          <Styled.VideoContainer>
            <Styled.Image>
              <img className="illust" src="images/likeimg.png" />
              {/* <img className="play-diy" src="/images/saveposition.gif" muted autoPlay loop playsInline /> */}
              <img className="play-diy" src="/images/diy02.gif" muted autoPlay loop playsInline />
            </Styled.Image>
          </Styled.VideoContainer>
        </Styled.DiyTitleView>

        <Styled.PeopleTitleView className="peopletitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            유저들의 후기
          </div>
          <Review />
        </Styled.PeopleTitleView>

        <Styled.TitleEndView>
          <Styled.StartButton onClick={ToHome}>시작하기</Styled.StartButton>
          <div className="title">나와 어울리는 장소로 떠날 준비가 되셨나요?</div>
        </Styled.TitleEndView>

        <Footer />
      </Styled.Body>
    </>
  );
}
export default MainPage;
