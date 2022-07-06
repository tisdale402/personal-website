// @ts-ignore
import React, {useEffect, useState} from "react";
import ReactTooltip from "react-tooltip";
import {createTheme, styled} from '@mui/material/styles'
//@ts-ignore
import Tooltip, {TooltipClasses} from "@mui/material/Tooltip";
// import Tooltip from "@material-ui/core/Tooltip";

interface ISkillsCard {
    info: string;
    color: string;
    image: any;
    tooltipColor: string;
    tooltipText: string;
    isRowActive: boolean;
    setCard: (string) => void;
    card: any;
}

// @ts-ignore
interface ITooltip {
    title: string;
    className?: any;
    cardImage: any;
    setCard: any;
    info: any;
    card: any;
}
const BlueOnGreenTooltip = styled(({ title, className, cardImage, setCard, info, card}: ITooltip) => (
    <div style={{marginBottom: '.8rem', fontSize: '2rem'}}>

        <Tooltip placement={'left'} title={title}  componentsProps={{ tooltip: { className: className } }}>
            <div className='skills-shadow' onMouseEnter={()=> {setCard(card);}}>
                <img src={cardImage} alt="test" className='skills-card-image'/>
            </div>
        </Tooltip>
    </div>
))(`
    color: lightblue;
    background-color: rgba(255, 255, 255, .065);
    font-size: 1.5em;
`);


const SkillsCard = ({info, image, color, tooltipColor, tooltipText, isRowActive, setCard, card}: ISkillsCard) => {


    return (
        <div className='skills-card'>
                <BlueOnGreenTooltip title={tooltipText} cardImage={image} card={card} setCard={setCard} info={info}/>
        </div>
    );
}

export default SkillsCard;