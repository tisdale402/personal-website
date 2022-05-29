import React, {useEffect, useState} from 'react';
import '../../../styles/style.scss';
//@ts-ignore
import styled from "styled-components";

const NavButton = (props: {title: string, icon: any, bgColor: string}) => {
    const {title, icon, bgColor} = props;
    const [color, setColor] = useState('black');
    const [fontSize, setFontSize] = useState('2rem');
    const [isActive, setIsActive] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const NavButtonStyling = styled.li`
        box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
        background: ${bgColor};
        font-size: 2rem;
        color: black;
        display: flex;
        padding: 5px;
        text-underline-offset: 5px;
        box-sizing: content-box;
        border: solid black 0.5px;
        text-shadow:
          0 0 7px var(--white);
          
          &:hover{
          cursor: pointer;
          color: white;
          }
    `;

    useEffect(() => {
        isActive || isHover ? setColor('white') :  setColor('black')
    }, [isActive, isHover])

    return (
        <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150"/>
                <div id="text">
                    <a href=""><span className="spot"></span>Button 1</a>
                </div>
            </svg>
        </div>
        //     <li className='underbar' onClick={() => {
        //         setIsActive(!isActive)
        //     }}
        //     onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
        //     >
        //         <img src={icon} style={{maxWidth: '3.8rem', maxHeight: '3.25rem', marginRight: '1rem'}} alt=""/>
        //     <div style={{color: color, fontSize: fontSize, marginRight: '1rem'}} >
        //     {title}
        // </div>
        //     </li>
    );
}

export default NavButton;