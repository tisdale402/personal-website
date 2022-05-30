// @ts-ignore
import React, {useEffect, useState} from "react";
import ReactTooltip from "react-tooltip";
import {createTheme, styled} from '@mui/material/styles'
//@ts-ignore
import Tooltip, {TooltipClasses} from "@mui/material/Tooltip";
// import Tooltip from "@material-ui/core/Tooltip";

interface ISkillsCard {
    title: string;
    color: string;
    image: any;
    tooltipColor: string;
    tooltipText: string;
    isRowActive: boolean;

}

// // @ts-ignore
// const theme = createTheme({
//     palette: {
//         primary: {
//             light: "black",
//             main: "black",
//             dark: "black",
//             contrastText: "black",
//         },
//         // backgroundColor: "transparent"
//     }
// });

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
    },
});

// @ts-ignore
interface ITooltip {
    title: string;
    className?: any;
    cardImage: string;
}
const BlueOnGreenTooltip = styled(({ title, className, cardImage}: ITooltip) => (
    <div style={{marginBottom: '.8rem', fontSize: '2rem'}}>
    <Tooltip placement={'left'} title={title}  componentsProps={{ tooltip: { className: className } }}>
        <img src={cardImage} alt="test" className='skills-card-image'/>
    </Tooltip>
    </div>
))(`
    color: lightblue;
    background-color: rgba(255, 255, 255, .065);
    font-size: 1.5em;
`);


const SkillsCard = ({title, image, color, tooltipColor, tooltipText, isRowActive}: ISkillsCard) => {


    return (
        <div className='skills-card'>
            <div className='skills-shadow' onClick={()=> {console.log(title);}}>
                <div style={{fontSize: '1.6rem', marginBottom: '1rem'}}>
                    {title}
                </div>
                <BlueOnGreenTooltip title={tooltipText} cardImage={image}/>
            </div>
    </div>
    );
}

export default SkillsCard;