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
import testImage from "../../img/data-mining.png"
//@ts-ignore
import testImage2 from "../../img/AdobeStock_173668395.jpeg"
import {Section} from 'react-scroll-section';
import ImageFollow from "react-image-follow";

import PulseLine from "../../utilities/pulseLine/pulseLine";

const AboutSection = () => {
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState('black');
    const [fontSize, setFontSize] = useState('5rem');
    const quotes = [{quote: 'The quieter you become, the more you are able to hear.', steps: '40', time: '1.5', width: '100%'},
                    {quote: 'Said I would, then I made it so.', steps: '22', time: '1.75', width: '55%'},
                    {quote: 'Im good at what I do.', steps: '17', time: '1.55', width: '40%'},
                    {quote: 'Object Composition over classical inheritance.', steps: '40', time: '3.5', width: '80%'}]

    // @ts-ignore
    // const quoteComponents = quotes.map((eachQuote: any) => (<Quote key={eachQuote.quote} width={eachQuote.width}
    //                                                                time={eachQuote.time} steps={eachQuote.steps}
    //                                                                quote={eachQuote.quote}/>))

    const [inc, setInc] = useState(1);
    // const [quote, setQuote] = useState(quoteComponents[0]);

    const [activeYear, setActiveYear] = useState("2020");
    const [year2020Color, setYear2020Color] = useState('rgba(1, 1, 1, 0.4)')

    const YearItem = styled.div`
    color: #fff;
  font-size: 1.9rem;
  font-weight: 600;
  border-radius: 500px;
    `;

    const Year2020Item = styled.div`
  font-size: 1.9rem;
  font-weight: 600;
  border-radius: 500px;
    `;

    const MonthItem = styled.li`
    color: #fff;
  font-size: 1.9rem;
  font-weight: 600;
  border-radius: 500px;
    `;

    // useEffect(() => {
    //     if(activeYear){
    //         console.log('useEffect')
    //     }
    // }, [activeYear])
    return (
        <Section id={'about'}>
        <section style={{margin: '5vh 5vw 0 5vw',}}>
            <h1>
                <span className="glitch" data-text="Experience">
                  Experience
                </span>
            </h1>
            {/*<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>*/}
            <div className="timeline">
                <ul>
                    <li>
                        <span>June 2022</span>
                        <div className="content" style={{display: "flex", flexDirection: "row"}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h3>BlackLocus</h3>
                            <h2>Austin, Texas</h2>
                            <p>
                                BlackLocus is a startup that was acquired by The Home Depot to serve as the data mining <br/>
                                division of the company. They use procured and processed information to make optimal decisions <br/>
                                in merchandise pricing internationally. Through a contract facilitated by KForce, I <br/>
                                served in a Fullstack Developer role for this company, contributing to the data<br/>
                                validation portion of the tech stack.
                            </p>
                            </div>
                            <div style={{backgroundColor: 'black'}} >
                                <ImageFollow src={testImage} alt="test"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>March 2021</span>
                        <div className="content" style={{display: "flex", flexDirection: "row"}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>

                            <h3>Maxar Technologies</h3>
                            <h2>Denver, Colorado</h2>
                            <p>
                                Maxar is a space technology company founded in the 1960's. In my position as a <br/>
                                technical consultant for Perficient, I served many roles for Maxar in a client-based relationship, including <br/>
                                frontend, backend, and fullstack developer roles. In all of these roles, I provided contributions <br/>
                                to their space image and infrastructure acquisition technologies
                            </p>
                        </div>
                            <div style={{backgroundColor: 'black'}} >
                                <ImageFollow src={testImage2} alt="test"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span>February 2021</span>
                        <div className="content">
                            <h3>Perficient</h3>
                            <h2>Lafayette, Louisiana</h2>
                            <p>
                                Perficient is a digital consulting company that serves internationally acclaimed clients<br/>
                                In addition to my client work, I contributed to internal projects for Perficient's use<br/>
                                I earned the Scrum Fundamentals certification and the Amazon Web Services Cloud Practitioner <br/>
                                certifications during my tenure.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>December 2020</span>
                        <div className="content">
                            <div>
                                <h3>Louisiana State University</h3>
                                <h2>Baton Rouge, Louisiana</h2>
                                <p>
                                    Received Bachelor of Science recognition, majoring in Computer Science concentrated <br/>
                                    in Software Engineering. LSU's computer science program focused on backend application <br/>
                                    principles and patterns. Shortly after graduation, I attained the Java SE 8 programmer from<br/>
                                    Oracle
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/*</div>*/}
        </section>
        </Section>
);
};

export default AboutSection;