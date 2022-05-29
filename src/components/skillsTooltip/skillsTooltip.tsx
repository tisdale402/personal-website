import React from 'react';
import '../../styles/style.scss'
// import {
//     createMuiTheme,
//     MuiThemeProvider,
//     withStyles
// } from "@material-ui/core/styles";

interface ISkillsTooltip {
    title: string;
    element: any;
    color: string;
    bgColor: string;
}
// const defaultTheme = createMuiTheme();
// const theme = createMuiTheme({
//     overrides: {
//         MuiTooltip: {
//             tooltip: {
//                 fontSize: "2em",
//                 color: "yellow",
//                 backgroundColor: "red"
//             }
//         }
//     }
// });

// const TextOnlyTooltip = withStyles({
//     tooltip: {
//         color: "black",
//         backgroundColor: "transparent"
//     }
// })(Tooltip);

const SkillsTooltip = ({title, element, color, bgColor}: ISkillsTooltip) => {

    // const CustomStyling = withStyles({
    //     tooltip: {
    //         color: color,
    //         backgroundColor: bgColor,
    //         fontSize: '1.5em',
    //     }
    // })(Tooltip);
    return (

            // <Tilt style={{transformStyle: 'preserve-3d'}} tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={50}
            //       transitionSpeed={100} scale={1} gyroscope>
            //     <CustomStyling title={title}>
                <div>
                {element}
                </div>
                // </CustomStyling>
            // </Tilt>
    )
};

export default SkillsTooltip;