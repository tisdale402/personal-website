//@ts-ignore
import styled from "styled-components";
import React from "react";

interface INavButton {
    title: string;
    onClick: () => void;
    selected: boolean;
}

const StyledTitle = styled.div`
        display: flex;
  align-items: center;
  font-size: 3.8rem;
  // font-family: black;
  color: rgba(255, 255, 255, .065);
  -webkit-text-stroke: 2px #009FFD;
  background: black;
  padding: 0 20px;
  border-radius: 2.5rem;
  animation: ${''} 2s ease-out;}`;

const StyledRowTitleComponent = () => (
    <StyledTitle/>
)

export default StyledTitle;