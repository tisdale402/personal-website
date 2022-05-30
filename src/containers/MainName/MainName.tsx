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
//@ts-ignore
import MN_Image1 from '../../img/Attachment-1.png';
//@ts-ignore
import MN_Image8 from '../../img/Attachment-8.png';
//@ts-ignore
import MN_Image3 from '../../img/Attachment-3.png';
//@ts-ignore
import MN_Image4 from '../../img/Attachment-4.png';
//@ts-ignore
import MN_Image5 from '../../img/Attachment-5.png';
//@ts-ignore
import MN_Image6 from '../../img/Attachment-6.png';
//@ts-ignore
import MN_Image7 from '../../img/Attachment-7.png';
import {Section} from 'react-scroll-section';


interface IMainName {
    onScroll: () => void;
    isScrolled: boolean;
}
const MainName = ()=> {

    const currentTitleIndex = useRef();
    //@ts-ignore
    currentTitleIndex.current = 0;

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
        {quote: MAIN_NAME_CONSTANTS.UX_DESIGNER, steps: '30', time: '1.5', width: '100%'},
        {quote: MAIN_NAME_CONSTANTS.NOLA_NATIVE, steps: '30', time: '1.5', width: '100%'}];

    const IMAGES_PATHS = [
        [
            MN_Image3,
            MN_Image8
        ],
        [
            MN_Image4,
            MN_Image6
        ],
        [
            MN_Image1,
            MN_Image7
        ]
    ];

    const quoteComponents = quotes.map((eachQuote: any) => (<Quote key={eachQuote.quote} width={eachQuote.width}
                                                                   time={eachQuote.time} steps={eachQuote.steps}
                                                                   quote={eachQuote.quote}/>));

    const fontFamilyIndex = useRef();
    //@ts-ignore
    fontFamilyIndex.current = fontFamilies[Math.floor(Math.random()*fontFamilies.length)]

    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*quotes.length));
    const [title, setTitle] = useState(quoteComponents[randomNumber]);

    const [fontFamily, setFontFamily] = useState('Pacifico');

    return (
        <Section id={'home'}>
        <div className='main-name'>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div className='cube'/>
            <div style={{fontSize: '6.5rem', display: 'flex', flexDirection: 'column', marginTop: '25vh', marginRight: '6vw', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center', color: '#009FFD'}}>
                    Alex
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'A'} delay={'1.6'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'L'} delay={'1.45'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'E'} delay={'1.3'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'X'} delay={'1.15'}/>*/}
                    {/*<ReactImageComponent/>*/}
                </div>
                <div style={{display: 'flex', color: '#009FFD'}}>
                    Tisdale
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'T'} delay={'1.0'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'I'} delay={'0.85'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'S'} delay={'0.6'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'D'} delay={'0.45'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'A'} delay={'0.3'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'L'} delay={'0.15'}/>*/}
                    {/*<MainNameLetter fontFamily={fontFamily} letter={'E'} delay={'0.0'}/>*/}
                </div>
                <div style={{minWidth: '100%', height: '10px', backgroundColor: '#06D6A0', marginBottom: '1.6rem'}}/>
                    {/*<div style={{display: "flex", justifyContent: 'flex-end'}}>*/}
                    {title}
                    {/*</div>*/}
                    {/*<Quote width={eachQuote.width} time={eachQuote.time} steps={eachQuote.steps} quote={eachQuote.quote}/>*/}
                </div>
            <div style={{ marginLeft: '10vw', height: '50%', display: 'flex'}}>
                <img src={IMAGES_PATHS[randomNumber][Math.floor(Math.random()*IMAGES_PATHS[randomNumber].length)]} alt="test"/>
            </div>
        </div>
        </Section>
    )
}

export default MainName;