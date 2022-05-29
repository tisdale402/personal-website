import React, {useEffect, useState} from 'react';
import '../../styles/style.scss';
//@ts-ignore
import SkillsCard from "../overviewCard/skillsCard.tsx";
// @ts-ignore
import styled, {keyframes} from "styled-components";
//@ts-ignore
import WebFont from 'webfontloader';
//@ts-ignore
import StyledRowTitleComponent from "../../containers/SkillsSection/StyledRowTitleComponent.tsx";
//@ts-ignore
import image from '../../img/103414.png';
import axios from "axios";

interface skillArgs {
    title: string;
    cardArgs: any[];
    direction: string;
    titleColor: string;
    imagePath: string;
}
const SkillsRow = ({title, cardArgs, direction, titleColor, imagePath}: skillArgs) => {
    const [isActive, setIsActive] = useState(false);

    const fontFamilies = ['Droid Sans', 'Chilanka', 'Festive', 'Syne Tactile',
        'Supermercado One', 'Comforter', 'Quintessential',
        'Bebas Neue', 'Dancing Script', 'Architects Daughter',
        'Pacifico', 'Shadows Into Light', 'Indie Flower', 'Permanent Marker',
        'Caveat', 'Cookie', 'Alfa Slab One']
    // const IMAGES =
    useEffect(() => {
        WebFont.load({
            google: {
                families: fontFamilies
            }
        })

    });

    return (
        <div onMouseOver={() => {setIsActive(true)}} onMouseLeave={() => setIsActive(false)} style={{display: 'flex', flexDirection: "column", alignItems: 'center', minWidth: '50vw', minHeight: '20vh', marginBottom: "4rem"}}>
            <StyledRowTitleComponent>
                {title}
                <img src={imagePath} alt="test" style={{marginLeft: '1.25rem', maxWidth: '5rem', maxHeight: '5rem'}}/>
                {/*<img src={'../../src/img/103414.png'} alt="test" className='skills-card-image'/>*/}
            </StyledRowTitleComponent>x
            <div className='skills-row' style={{display: 'flex', flexDirection: "row", alignItems: 'flex-start', fontSize: '5rem',
            textShadow:
                '0 0 7px #fff, 0 0 10px #fff',
            width: '100%', minHeight: '15rem'}}>
            {cardArgs.map((card) => {

                return (
                    // @ts-ignore
                        <SkillsCard isRowActive={isActive} key={card.title} title={card.title} color={card.color} tooltipText={card.tooltipText} tooltipColor={card.tooltipColor} image={card.image}/>
                )
            })}
            </div>
        </div>
    )
};

export default SkillsRow;