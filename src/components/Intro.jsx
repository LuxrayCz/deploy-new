import styled from "styled-components";
import man from "../assets/man.png";
import TypeWriterEffect from "react-typewriter-effect";
import DownArrow from "../assets/down.png";

export default function Intro() {
  return (
    <StyledIntro id="home">
      <Left>
        <ImgContainer>
          <img src={man} />
        </ImgContainer>
      </Left>
      <Right>
        <TextCont>
          <h2>Hi there, I am</h2>
          <h1>Filip Šenk</h1>
          <Line>
            <h3>Freelance</h3>
            <TypeWriterEffect
              textStyle={{
                fontWeight: 700,
                fontSize: "3rem",
                color: "crimson",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={["Web developer", "Programmer", "Designer"]}
              multiTextDelay={1800}
              typeSpeed={120}
              multiTextLoop
            />
          </Line>
        </TextCont>
        <a href="#portfolio">
          <img src={DownArrow} className="arrowIcon" />
        </a>
      </Right>
    </StyledIntro>
  );
}
const Line = styled.div`
  display: flex;
`;
const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10rem;
  margin-left: 6rem;
  color: black;
  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
    margin-right: 1.3rem;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 650px;
    height: 650px;
    margin-bottom: 5rem;
    border-radius: 50%;
    background-color: crimson;
  }
`;
const StyledIntro = styled.section`
  background-color: white;

  display: flex;
`;
const Left = styled.div`
  flex: 1;
  background-color: white;
`;
const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  .arrowIcon {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 90px;
    left: 40%;
    animation: arrowBlink 1.5s infinite;
  }
  @keyframes arrowBlink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
