// @ts-ignore
import React, {useEffect, useRef, useState} from 'react';
//@ts-ignore
import styled, {keyframes} from "styled-components";
import '../../styles/style.scss'

//@ts-ignore
import ReactIMG from '../../img/hiclipart.com (2).png';
//@ts-ignore
import caretPNG from '../../img/pngegg.png'
//@ts-ignore
import homePNG from '../../img/white-home-icon-label-text-stencil-cross-transparent-png-721953.png'
//@ts-ignore
import bookPNG from '../../img/kindpng_6868724.png'
//@ts-ignore
import elephantPNG from '../../img/pngkit_circus-elephant-png_1839189.png'
//@ts-ignore
import testTubePNG from '../../img/pngkit_png-test-image_3910370.png'
//@ts-ignore
import resumeIMG from '../../img/document-icon-36547.jpg'
// @ts-ignore
import {throttle} from 'lodash';
// @ts-ignore
import SkillsSection from "../SkillsSection/SkillsSection.tsx";
// @ts-ignore
import AboutSection from "../AboutSection/AboutSection.tsx";
// @ts-ignore
import MainName from "../MainName/MainName.tsx";
// @ts-ignore
import Footer from "../Footer/Footer.tsx";

import {
    ScrollingProvider,
    Section,
} from 'react-scroll-section';
//@ts-ignore
import {StaticMenu} from "../menu/Menu.tsx";


const App = () => {

    const StyledBackground = styled.div
    `background: black;
    background-size: 400% 400%;
    animation: fadeIn .8s ease-out;
    position: relative;
    //height: 100vh;
    width: 100%;
    overflow: hidden;
    padding:0;
    margin:0px;
    animation: ${''} 2s infinite;}`;

    return (
            <StyledBackground>
                <ScrollingProvider>
                    <StaticMenu/>
                    <MainName/>
                    <AboutSection/>
                    <SkillsSection/>
                    <Footer/>
                </ScrollingProvider>
            </StyledBackground>
    );
};

export default App;