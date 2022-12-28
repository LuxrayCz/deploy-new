import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import man from "../assets/man.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../assets/theme";

export default function Navbar({ sidebar, handleSidebar }) {
  return (
    <StyledNav className={sidebar ? "active" : undefined}>
      <FlexCont className="flex">
        <Left className="left">
          <a href="#home" className={sidebar ? " logo active" : "logo"}>
            Luxray.u
          </a>
          <Item className={sidebar ? "active" : undefined}>
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h4>+420 739 964 040</h4>
          </Item>
          <Item className={sidebar ? "active" : undefined}>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <h4>ilaka69@seznam.cz</h4>
          </Item>
        </Left>
        <Right className="right">
          <div className={sidebar ? "active hamburger" : "hamburger"} onClick={handleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Right>
      </FlexCont>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  height: 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  overflow: hidden;
  transition: all 1s ease;
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
const FlexCont = styled.nav`
  padding: 10px 30px;
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Left = styled.nav`
  display: flex;
  align-items: center;

  .logo {
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin-right: 3.2rem;
    transition: all 1s ease;

    &.active {
      color: white;
    }
  }
`;
const Right = styled.nav`
  .hamburger {
    width: 32px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    span {
      width: 100%;
      height: 3px;
      transform-origin: left;
      transition: all 1s ease;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    &.active {
      span {
        &:first-child {
          background-color: white;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          background-color: white;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;
const Item = styled.nav`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  margin-right: 2rem;
  transition: all 1s ease;
  &.active {
    color: white;
  }
  h4 {
    font-weight: 500;
  }
  .icon {
    font-size: 20px;
    margin-right: 0.4rem;
  }
`;
