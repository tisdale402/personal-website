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
  color: black;
  background: linear-gradient(90deg, rgba(6, 214, 160, 1), #009FFD);
  padding: 0 20px;
  max-height: 5rem;
  min-width: 35%;
  border-radius: 2.5rem;
  // text-shadow:
  //         0 0 7px white;
          box-shadow: 0 0 .2rem blue,
            0 0 .2rem #fff,
            0 0 2rem blue,
            // 0 0 0.8rem blue,
            // 0 0 2.8rem blue,
            inset 0 0 1.3rem blue; 
  animation: ${''} 2s ease-out;}`;

const StyledRowTitleComponent = () => (
    <StyledTitle/>
)

export default StyledTitle;