import React, {useEffect, useState} from 'react';
import '../../styles/style.scss';
import DigitalClock from "../../components/digitalClock/digitalClock";
//@ts-ignore
import Typing from 'react-typing-animation';
//@ts-ignore
import styled, {keyframes} from "styled-components";
//@ts-ignore
import Quote from "../../components/quote/quote.tsx";
//@ts-ignore
import testImage from "../../img/data700x350.png"
//@ts-ignore
import testImage2 from "../../img/satellite400x600.png"
//@ts-ignore
import testImage3 from "../../img/perficient-background.jpeg"
//@ts-ignore
import testImage4 from "../../img/LSU400x600.png"
import {Section} from 'react-scroll-section';
import ImageFollow from "react-image-follow";
import PulseLine from "../../utilities/pulseLine/pulseLine";
import MediaQuery from "react-responsive";

const AboutSection = () => {
    const [isActive, setActive] = useState(false);
    return (
        <Section id={'about'}>
        <section style={{margin: '5vh 5vw 10vh 5vw'}}>
            <div style={{width: '12vw', paddingTop: '10vh'}}>
                <Quote width={'100%'} time={'.8'} steps={'20'} quote={'Experience'}/>
            </div>
            {/*<h1>*/}
            {/*    Experience*/}
            {/*</h1>*/}
            <MediaQuery minWidth={1024}>
            <div className="timeline">
                <ul>
                    <li style={{width: '100%'}}>
                        <span>June 2022 - Present</span>
                        <div className="content" style={{display: "flex", justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', maxWidth: '50vw', minHeight: '35vh', flexDirection: 'column'}}>
                                <h3>BlackLocus</h3>
                                <h2>Austin, Texas</h2>
                                <p>
                                    <a href ='https://www.blacklocus.com/' target="_blank" className='anchor'>BlackLocus</a> is a startup that was
                                    acquired by <a href ='https://www.homedepot.com/' className='anchor' target="_blank">The Home Depot</a> to
                                    handle the  innovative research operations of the company, working primarily in the data mining
                                    and artificial intelligence fields. Through a contract facilitated
                                    by <a href ='https://www.kforce.com/' className='anchor' target="_blank">Kforce</a>, I
                                    served in a Fullstack Developer role for this company in which I contributed to the web
                                    scraping portion of their competitive intelligence pipeline.
                                </p>
                            </div>
                            <img src={testImage} style={{maxWidth: '50rem', maxHeight: '70rem', borderRadius: '85px'}} alt="test" />
                        </div>
                    </li>
                    <li>
                        <span>March 2021 - May 2022</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', maxWidth: '50vw', flexDirection: 'column'}}>
                                <h3>Maxar Technologies</h3>
                                <h2>Denver, Colorado</h2>
                                <p>
                                    <a href ='https://www.maxar.com/' className='anchor' target="_blank">Maxar</a> is a space technology company
                                    that provides its services to both private clients and government agencies. In my position as a technical consultant at Perficient,
                                    I served in many roles for Maxar including frontend, backend, and fullstack developer.
                                    In all of these roles, I contributed to their satellite imagery and space infrastructure acquisition applications.
                                </p>
                            </div>
                            <img src={testImage2} style={{maxWidth: '45rem', maxHeight: '45rem', borderRadius: '85px'}} alt="test"/>
                        </div>
                    </li>
                    {/*<div className="bubble"></div>*/}
                    {/*<div className="bubble"></div>*/}
                    {/*<div className="bubble"></div>*/}
                    {/*<div className="bubble"></div>*/}
                    {/*<div className="bubble"></div>*/}
                    <li>
                        <span>February 2021 - May 2022</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '50vw'}}>
                            <h3>Perficient</h3>
                            <h2>Lafayette, Louisiana</h2>
                            <p>
                                <a href ='https://www.perficient.com/' className='anchor' target="_blank">Perficient</a> is a digital consulting
                                company that serves internationally acclaimed clients.
                                In addition to my work with Maxar, I contributed to internal projects for Perficient's use.
                                I earned the <a href ='https://www.credly.com/badges/dbe8d1cb-27e2-45d8-9253-6eaf55807f74?source=linked_in_profile'
                                                target="_blank"
                                                className='anchor'>Certified Cloud Practitioner</a> certification from AWS and the Scrum Fundamentals certification from the Scrum Alliance during my tenure.
                            </p>
                        </div>
                            <img src={testImage3} style={{maxWidth: '40rem', maxHeight: '40rem', borderRadius: '85px'}} alt="test"/>
                        </div>
                    </li>
                    <li>
                        <span>August 2017 - December 2020</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                <h3>Louisiana State University</h3>
                                <h2>Baton Rouge, Louisiana</h2>
                                <p>
                                    After watching LSU quarterback Joe Burrow add a new chapter to the Bible, I received Bachelor of Science recognition, majoring in Computer Science concentrated
                                    in Software Engineering. LSU's computer science program focused on backend application
                                    principles and patterns which provided the groundwork for attaining the <a href ='https://www.credly.com/badges/42c4c569-0e50-4b17-9523-0ca3850e264a?source=linked_in_profile'
                                                                                                         target="_blank" className='anchor'>Java SE 8 Programmer Certification</a> from Oracle
                                    shortly after graduation.
                                </p>
                                </div>
                            <img style={{maxWidth: '45rem', maxHeight: '45rem', borderRadius: '85px'}} src={testImage4} alt="test"/>
                        </div>
                    </li>
                </ul>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
            <div className="timeline">
                <ul>
                    <li style={{width: '100%'}}>
                        <span>June 2022 - Present</span>
                        <div className="content" style={{display: "flex", justifyContent: 'space-between', animation: 'none'}}>
                            <div style={{display: 'flex', minHeight: '35vh', flexDirection: 'column'}}>
                                <h3>BlackLocus</h3>
                                <h2>Austin, Texas</h2>
                                <p>
                                    <a href ='https://www.blacklocus.com/' target="_blank" className='anchor'>BlackLocus</a> is a startup that was
                                    acquired by <a href ='https://www.homedepot.com/' className='anchor' target="_blank">The Home Depot</a> to
                                    handle the  innovative research operations of the company, working primarily in the data mining
                                    and artificial intelligence fields. Through a contract facilitated
                                    by <a href ='https://www.kforce.com/' className='anchor' target="_blank">Kforce</a>, I
                                    served in a Fullstack Developer role for this company in which I contributed to the web
                                    scraping portion of their competitive intelligence pipeline.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>March 2021 - May 2022</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', maxWidth: '50vw', flexDirection: 'column'}}>

                            <h3>Maxar Technologies</h3>
                            <h2>Denver, Colorado</h2>
                            <p>
                                <a href ='https://www.maxar.com/' className='anchor' target="_blank">Maxar</a> is a space technology company
                                that provides its services to both private clients and government agencies. In my position as a technical consultant at Perficient,
                                I served in many roles for Maxar including frontend, backend, and fullstack developer.
                                In all of these roles, I contributed to their satellite imagery and space infrastructure acquisition technologies.
                            </p>
                        </div>
                            {/*<div style={{backgroundColor: 'black'}} >*/}
                            {/*    <ImageFollow src={testImage2} alt="test"/>*/}
                            {/*</div>*/}
                        </div>
                    </li>
                    <li>
                        <span>February 2021 - May 2022</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                            <div style={{display: 'flex', flexDirection: 'column', maxWidth: '50vw'}}>
                            <h3>Perficient</h3>
                            <h2>Lafayette, Louisiana</h2>
                            <p>
                                <a href ='https://www.perficient.com/' className='anchor' target="_blank">Perficient</a> is a digital consulting
                                company that serves internationally acclaimed clients.
                                In addition to my client work with Maxar, I contributed to internal projects for Perficient's use.
                                I earned the <a href ='https://www.credly.com/badges/dbe8d1cb-27e2-45d8-9253-6eaf55807f74?source=linked_in_profile'
                                                target="_blank"
                                                className='anchor'>Certified Cloud Practitioner</a> certification from AWS and the Scrum Fundamentals certification from the Scrum Alliance during my tenure.
                            </p>
                        </div>
                            <div style={{backgroundColor: 'black'}} >
                                {/*<ImageFollow src={testImage3} alt="test"/>*/}
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>August 2017 - December 2020</span>
                        <div className="content" style={{display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                <h3>Louisiana State University</h3>
                                <h2>Baton Rouge, Louisiana</h2>
                                <p>
                                    I received Bachelor of Science recognition, majoring in Computer Science concentrated
                                    in Software Engineering. LSU's computer science program focused on backend application
                                    principles and patterns which provided the groundwork for attaining the <a href ='https://www.credly.com/badges/42c4c569-0e50-4b17-9523-0ca3850e264a?source=linked_in_profile'
                                                                                                         target="_blank" className='anchor'>Java SE 8 Programmer Certification</a> from Oracle
                                    shortly after graduation.
                                </p>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
            </MediaQuery>
        </section>
        </Section>
);
};

export default AboutSection;