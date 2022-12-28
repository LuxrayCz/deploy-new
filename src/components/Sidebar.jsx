import React from "react";
import styled from "styled-components";

export default function Sidebar({ sidebar }) {
  return (
    <SideBarStyled className={sidebar ? "active" : undefined}>
      <FlexCont>
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#works">Works</a>
        <a href="#testimonials">Testimonial</a>
        <a href="#contact">Contact</a>
      </FlexCont>
    </SideBarStyled>
  );
}
const SideBarStyled = styled.div`
  width: 300px;
  right: -300px;
  &.active {
    right: 0;
  }
  transition: all 0.8s ease;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 5rem);

  z-index: 5;
  top: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const FlexCont = styled.div`
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  a {
    font-size: 35px;
    text-decoration: none;
    font-weight: 300;
    color: white;
    padding: 15px 10px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 5rem;
    }
    &:hover {
      font-weight: 500;
    }
  }
`;
