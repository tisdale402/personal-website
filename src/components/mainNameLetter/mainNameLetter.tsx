import React, {useEffect, useState} from 'react';
//@ts-ignore
import styled, {keyframes} from "styled-components";

import '../../styles/style.scss';

interface IMainNameLetter{
    delay: string;
    letter: string;
    fontFamily: string;
}

const MainNameLetter = ({delay, letter, fontFamily}: IMainNameLetter) => {

    const floating = keyframes`  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 30px); }
  100%   { transform: translate(0, -0px); }`;
    const color = '#009FFD'
    const StyledLetter = styled.div`
    color: ${color};
    font-family: ${fontFamily};
    opacity: 95%;
    animation-delay: ${delay}s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;`;
    return (
        <StyledLetter>{letter}</StyledLetter>
    )
}

export default MainNameLetter;