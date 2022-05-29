import React from 'react';
import '../../styles/style.scss';
//@ts-ignore
import styled from "styled-components";

// interface IAnimationString {
//     width: string;
//     height: string;
//     backgroundColor: string;
//     numChildren: number;
//
//     borderRadius: string;
//     animation: any;
//     top: string;
//     right?: string;
//     bottom?: string;
//     left?: string;
//     delay: number;
//
// }
//
// interface  IPulseLine{
//     animationArgs: IAnimationString[]
// }
const PulseLine = () => {
    return(
        <div className='lds-animation-1'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        // <div className="loader">
        //     <span></span>
        //     <span></span>
        //     <span></span>
        //     <span></span>
        // </div>
    );
}

export default PulseLine;