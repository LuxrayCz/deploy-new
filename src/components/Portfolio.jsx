import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../assets/data";
import ListItem from "./ListItem";
import DownArrow from "../assets/down.png";

const ListTitles = [
  { id: "featured", title: "Featured" },
  { id: "web", title: "Web App" },
  { id: "mobile", title: "Mobile App" },
  { id: "design", title: "Design" },
  { id: "content", title: "Content" },
];

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);
  return (
    <StyledPort id="portfolio">
      <Cont>
        <h1>Portfolio</h1>
        <List>
          {ListTitles.map((d) => {
            return <ListItem key={d.id} id={d.id} title={d.title} selected={selected} setSelected={setSelected} />;
          })}
        </List>
        <Grid>
          {data.map((d) => {
            return (
              <GridItem key={d.title}>
                <img src={d.img} alt="" />
                <h4>{d.title}</h4>
              </GridItem>
            );
          })}
        </Grid>
      </Cont>
      <a href="#works">
        <img src={DownArrow} className="arrowIcon" />
      </a>
    </StyledPort>
  );
}
const GridItem = styled.div`
  position: relative;
  display: flex;
  border: 1px solid lightgrey;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.5s ease;
  h4 {
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
  img {
    width: 270px;
    height: 190px;
    object-fit: cover;
    z-index: 3;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    h4 {
      z-index: 3;
    }
    img {
      z-index: 1;
      opacity: 0.2;
    }
  }
`;
const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
`;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
    color: black;
    margin-block: 1rem;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledPort = styled.section`
  background-color: white;
  display: flex;
  justify-content: center;
  position: relative;
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
