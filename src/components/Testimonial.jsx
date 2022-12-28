import styled from "styled-components";
import ArrowRight from "../assets/right-arrow.png";
import DownArrow from "../assets/down.png";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <StyledTest id="testimonials">
      <h1>Testimonials</h1>
      <FlexCont>
        {data.map((d) => {
          return (
            <Card key={d.name} className={d.featured ? "featured" : undefined}>
              <ImgCont>
                <img src={ArrowRight} alt="" className="icon" />
                <img src={d.img} alt="" className="profilePic" />
                <img src={d.icon} alt="" className="icon" />
              </ImgCont>
              <TextCont1 className="desc">{d.desc}</TextCont1>
              <TextCont2>
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </TextCont2>
            </Card>
          );
        })}
      </FlexCont>
      <a href="#contact">
        <img src={DownArrow} className="arrowIcon" />
      </a>
    </StyledTest>
  );
}
const StyledTest = styled.section`
  display: flex;
  background-color: white;
  align-items: center;
  flex-direction: column;
  position: relative;
  h1 {
    font-size: 50px;
    font-weight: 700;
    overflow: hidden;
    color: black;
    margin-top: 1rem;
  }
  .arrowIcon {
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 85px;
    left: 49%;
    animation: arrowBlink 1.4s infinite;
  }
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;
const FlexCont = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 250px;
  height: max(350px, 40%);
  padding: 20px;
  background-color: white;
  display: flex;
  margin-inline: 1.2rem;
  border-radius: 10px;
  box-shadow: 0 0 15px -8px black;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  margin-bottom: 7rem;
  transition: all 0.4s ease;
  &.featured {
    height: max(380px, 45%);
    width: 280px;
  }
  &:hover {
    transform: scale(1.1);
    .desc {
      background-color: rgb(252, 178, 194);
    }
  }
`;
const ImgCont = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .profilePic {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    margin: 0 2rem;
    object-fit: cover;
  }
  .icon {
    width: 25px;
    height: 25px;
  }
`;
const TextCont1 = styled.div`
  background-color: rgb(253, 215, 223);
  padding: 10px;
  border-radius: 10px;
`;
const TextCont2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-size: 19px;
    font-weight: 700;
  }
  h4 {
    color: grey;
  }
`;
