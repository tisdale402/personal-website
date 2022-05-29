import React from 'react';
import {useScrollSection} from "react-scroll-section";
//@ts-ignore
import styled from "styled-components";
//@ts-ignore
import NavButtonStyledComponent from "./NavButtonStyledComponent.tsx";


export const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const skillsSection = useScrollSection('skills');
  const contactSection = useScrollSection('contact');

  return (
    <ul className='nav-bar'>
        <NavButtonStyledComponent title={'Home'} onClick={homeSection.onClick} selected={homeSection.selected}/>
        <NavButtonStyledComponent title={'About'} onClick={aboutSection.onClick} selected={aboutSection.selected}/>
        <NavButtonStyledComponent title={'Skills'} onClick={skillsSection.onClick} selected={skillsSection.selected}/>
    </ul>
  );
};
