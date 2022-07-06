//@ts-ignore
import React from 'react';
import '../../styles/style.scss';
import styled, {keyframes} from "styled-components";

interface IQuote {
    width: string;
    time: string;
    steps: string;

    quote: string;
}

const Quote = ({width, quote, steps, time}: IQuote) => {
    const typing = keyframes`
  from {width: 0}
  to {width: ${width}}


@keyframes blink-caret {
  from, to {border-color: transparent}
  50% { border-color: white}
}`

    const blinkCaret = keyframes`from, to {border-color: transparent}
  50% { border-color: #009FFD}`
    const StyledQuote = styled.div`overflow: hidden;
                             border-right: .15em solid white;
                             white-space: nowrap;
                             color: #009FFD;
                             // overflow: hidden,
                              font-size: 3.5rem; 
                              // margin: 0 10rem,
                               display: block
                             max-width: 5vw;
                             // letter-spacing: 0.05em;
                             animation:
                             ${typing} ${time}s steps(${steps}, end), 3s,
                             ${blinkCaret} .75s step-end infinite;`
    return (
        <StyledQuote>
            {quote}
        </StyledQuote>
    )
}

export default Quote;