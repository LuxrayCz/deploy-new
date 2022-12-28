import React from "react";
import styled from "styled-components";

export default function ListItem({ id, title, selected, setSelected }) {
  return (
    <div>
      <StyledItem onClick={() => setSelected(id)} className={id === selected ? "active" : undefined} key={id}>
        {title}
      </StyledItem>
    </div>
  );
}
const StyledItem = styled.li`
  padding: 10px 15px;
  margin: 10px 20px;
  cursor: pointer;
  border-radius: 9px;
  background-color: #dadada6c;
  color: black;
  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
