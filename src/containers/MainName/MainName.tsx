import React, {useEffect, useRef, useState} from 'react';
import '../../styles/style.scss';
//@ts-ignore
import MainNameLetter from "../../components/mainNameLetter/mainNameLetter.tsx";
//@ts-ignore
import ReactImageComponent from "../../components/imageComponents/reactImageComponent.tsx";
//@ts-ignore
import WebFont from 'webfontloader';
//@ts-ignore
import {throttle} from 'lodash';
//@ts-ignore
import PulseLine from "../../utilities/pulseLine/pulseLine.tsx";
//@ts-ignore
import * as MAIN_NAME_CONSTANTS from "../../utilities/constants/mainNameConstants.ts";
//@ts-ignore
import Quote from "../../components/quote/quote.tsx";
import {Section} from 'react-scroll-section';


interface IMainName {
    onScroll: () => void;
    isScrolled: boolean;
}
const MainName = ()=> {

    const currentTitleIndex = useRef();
    //@ts-ignore
    currentTitleIndex.current = 0;
    //@ts-ignore
    // const [currentTitle, setCurrentTitle] = useState(MAIN_NAME_TITLES[currentTitleIndex.current]);
    // const getCurrentTitle = () => {
    //     return (
    //         <div style={{display: "flex", justifyContent: 'flex-end', color: 'rgb(61,237,245)', fontSize: '3rem', letterSpacing: '5px'}}>
    //             {currentTitle}
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //     setInterval(() => {
    //         //@ts-ignore
    //         console.log('nextTitle: ', MAIN_NAME_TITLES[currentTitleIndex.current + 1]);
    //         //@ts-ignore
    //         currentTitleIndex.current = MAIN_NAME_TITLES[currentTitleIndex.current + 1] ? currentTitleIndex.current + 1 : 0;
    //     }, 3000)
    //     //@ts-ignore
    //     setCurrentTitle(MAIN_NAME_TITLES[currentTitleIndex.current]);
    // }, );

    // useEffect(() => {
    //     //@ts-ignore
    //     setCurrentTitle(MAIN_NAME_TITLES[currentTitleIndex.current]);
    // }, [currentTitle])

    const fontFamilies = ['Droid Sans', 'Chilanka', 'Festive', 'Syne Tactile',
                            'Supermercado One', 'Comforter', 'Quintessential',
                            'Bebas Neue', 'Dancing Script', 'Architects Daughter',
                            'Pacifico', 'Shadows Into Light', 'Indie Flower', 'Permanent Marker',
                            'Caveat', 'Cookie', 'Alfa Slab One']
        useEffect(() => {
        WebFont.load({
            google: {
                families: fontFamilies
            }
        })
    });

    const quotes = [{quote: MAIN_NAME_CONSTANTS.SOFTWARE_CONSULTANT, steps: '30', time: '1.3', width: '100%'},
        {quote: MAIN_NAME_CONSTANTS.AVID_AGILIST, steps: '30', time: '.6', width: '100%'},
        {quote: MAIN_NAME_CONSTANTS.FULLSTACK_DEVELOPER, steps: '30', time: '1.5', width: '100%'},
        {quote: MAIN_NAME_CONSTANTS.WESTBANK_NATIVE, steps: '30', time: '1.5', width: '100%'}];

    const quoteComponents = quotes.map((eachQuote: any) => (<Quote key={eachQuote.quote} width={eachQuote.width}
                                                                   time={eachQuote.time} steps={eachQuote.steps}
                                                                   quote={eachQuote.quote}/>));

    // const eachQuote = {quote: 'Software Consultant.', steps: '20', time: '1.3', width: '100%'}
    const fontFamilyIndex = useRef();
    //@ts-ignore
    fontFamilyIndex.current = fontFamilies[Math.floor(Math.random()*fontFamilies.length)]

    const [title, setTitle] = useState(quoteComponents[Math.floor(Math.random()*quotes.length)]);
    const [index, setIndex] = useState(1)
    // useEffect(() => {
    //     setInterval(() => {
    //         setTitle(quoteComponents[index]);
    //         if(index + 1 >= quoteComponents.length)
    //             setIndex(0);
    //         else
    //             setIndex(index+1);
    //     }, 5000)
    // },);

    const [fontFamily, setFontFamily] = useState('Pacifico');

    // useEffect(() => {
    //     let newFontFamily = fontFamilies[Math.floor(Math.random()*fontFamilies.length)];
    //     if (hasEntered) {
    //         while (newFontFamily === fontFamilyIndex.current) newFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    //         //@ts-ignore
    //         // secondPass ?
    //             fontFamilyIndex.current
    //                 // = newFontFamily : setSecondPass(true);
    //     }
    //     //@ts-ignore
    //     // if(secondPass)
    //         setFontFamily(fontFamilyIndex.current)
    // }, [hasEntered])

    return (
        <Section id={'home'}>
        <div className='main-name'>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div style={{fontSize: '6.5rem', display: 'flex', flexDirection: 'column', marginLeft: '8vw', marginTop: '10vh'}}>
                <div style={{display: 'flex', alignItems: 'center', minWidth: '50vw'}}>
                    <MainNameLetter fontFamily={fontFamily} letter={'A'} delay={'1.6'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'L'} delay={'1.45'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'E'} delay={'1.3'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'X'} delay={'1.15'}/>
                    <ReactImageComponent/>
                </div>
                <div style={{display: 'flex'}}>
                    <MainNameLetter fontFamily={fontFamily} letter={'T'} delay={'1.0'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'I'} delay={'0.85'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'S'} delay={'0.6'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'D'} delay={'0.45'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'A'} delay={'0.3'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'L'} delay={'0.15'}/>
                    <MainNameLetter fontFamily={fontFamily} letter={'E'} delay={'0.0'}/>
                </div>
                <div style={{minWidth: '100%', height: '10px', backgroundColor: '#06D6A0', marginBottom: '1.6rem'}}/>
                {/*<div style={{display: "flex", justifyContent: 'flex-end'}}>*/}
                {title}
                {/*</div>*/}
                {/*<Quote width={eachQuote.width} time={eachQuote.time} steps={eachQuote.steps} quote={eachQuote.quote}/>*/}
            </div>
            {/*<PulseLine/>*/}
        </div>
        </Section>
    )
}

export default MainName;