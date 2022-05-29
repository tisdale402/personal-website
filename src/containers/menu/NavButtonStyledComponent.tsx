//@ts-ignore
import styled from "styled-components";
import React from "react";

interface INavButton {
    title: string;
    onClick: () => void;
    selected: boolean;
}

const NavButtonStyling = styled.li`
    margin-top: 0;
    position: relative;
    width: 150px;
    height: 40px;
    display: inline-block;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
    `;

const NavButtonStyledComponent = ({title, onClick, selected}: INavButton) => (
    <NavButtonStyling key={title} onClick={onClick} selected={selected}  className={"svg-wrapper"}>
        <div className='nav-btn-title'>{title}</div>
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                <rect id="shape" height="40" width="150"/>
                <div id="text">
                    <a href="" style={{color: 'white'}}><span className="spot"></span></a>
                </div>
            </svg>
    </NavButtonStyling>
);

export default NavButtonStyledComponent;