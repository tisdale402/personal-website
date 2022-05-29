// @ts-ignore
import React, {useEffect, useState} from "react";
import ReactTooltip from "react-tooltip";
import {styled} from '@mui/material/styles'
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


const SkillsCard = ({title, image, color, tooltipColor, tooltipText, isRowActive}: ISkillsCard) => {


    return (
        <div className='skills-card'>
            <div className='skills-shadow' onClick={()=> {console.log(title);}}>
                <div style={{fontSize: '1.6rem', marginBottom: '1rem'}}>
                    {title}
                </div>
                <Tooltip title={tooltipText} placement='left-start' sx={{width: 300}}>
                    <div style={{marginBottom: '.8rem', fontSize: '2rem'}}>
                        <img src={image} alt="test" className='skills-card-image'/>
                    </div>
                </Tooltip>
            </div>
    </div>
    );
}

export default SkillsCard;