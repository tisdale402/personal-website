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
  justify-content: center;
  align-items: center;
  font-size: 3.8rem;
  // font-family: black;
  color: rgba(255, 255, 255, .065);
  -webkit-text-stroke: 2px rgba(6, 214, 160, 1);
  background: black;
  padding: 0 20px;
  border-radius: 2.5rem;
  // text-shadow:
  //         0 0 7px white;
          box-shadow: 0 0 .2rem rgba(6, 214, 160, 1),
            0 0 .2rem #fff,
            0 0 2rem rgba(6, 214, 160, 1),
            // 0 0 0.8rem rgba(6, 214, 160, 1),
            // 0 0 2.8rem rgba(6, 214, 160, 1),
            inset 0 0 1.3rem rgba(6, 214, 160, 1); 
  animation: ${''} 2s ease-out;}`;

const StyledRowTitleComponent = () => (
    <StyledTitle/>
)

export default StyledTitle;