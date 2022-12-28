import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../assets/arrow.png";
import DownArrow from "../assets/down.png";

export default function Works() {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const [slide, setSlide] = useState(1);
  const handleSlide = (way) => {
    if (way === "left") {
      slide > 0 ? setSlide(slide - 1) : setSlide(data.length - 1);
    } else {
      slide < data.length - 1 ? setSlide(slide + 1) : setSlide(0);
    }
  };
  return (
    <StyledWork id="works">
      <Slider style={{ transform: `translateX(-${slide * 100}vw)` }}>
        {data.map((d) => {
          return (
            <Container key={d.id}>
              <ItemStyled>
                <Left>
                  <FlexCont>
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>

                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Projects</span>
                  </FlexCont>
                </Left>
                <Right>
                  <img src={d.img} alt="" />
                </Right>
              </ItemStyled>
            </Container>
          );
        })}
      </Slider>
      <img
        src={ArrowIcon}
        alt=""
        className="iconArrow left"
        onClick={() => {
          handleSlide("left");
        }}
      />
      <img
        src={ArrowIcon}
        alt=""
        className="iconArrow right"
        onClick={() => {
          handleSlide("right");
        }}
      />
      <a href="#testimonials">
        <img src={DownArrow} className="arrowIcon" />
      </a>
    </StyledWork>
  );
}
const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  width: 80%;
  margin-bottom: 2rem;
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
  .imgContainer {
    width: 50px;
    height: 50px;
    background-color: rgb(255, 190, 167);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
    }
  }
`;
const ItemStyled = styled.div`
  height: 100%;
  width: 900px;
  background-color: white;
  display: flex;
  border-radius: 20px;
`;

const Left = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const Right = styled.div`
  flex: 8;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 420px;
    object-fit: cover;
    transform: rotate(-7deg);
  }
`;

const Slider = styled.div`
  height: 450px;

  position: absolute;
  display: flex;
  left: 0;
  margin-bottom: 5rem;
  transition: all 0.8s ease;
`;
const StyledWork = styled.section`
  background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .arrowIcon {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 85px;
    left: 49%;
    animation: arrowBlink 1.4s infinite;
    color: white;
  }
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
  .iconArrow {
    position: absolute;
    z-index: 5;
    width: 60px;
    height: 60px;
    bottom: 52%;
    cursor: pointer;
    &.right {
      right: 19%;
    }
    &.left {
      left: 19%;
      transform: rotate(180deg);
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
