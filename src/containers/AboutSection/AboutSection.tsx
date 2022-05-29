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
import testImage from "../../img/hotel-2.jpg"
import {Section} from 'react-scroll-section';

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
    const src =
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    const src2 = "./big_buck_bunny_720p_surround.mp4.crdownload"

    return (
        <Section id={'about'}>
        <section>
            <div className="timeline">
                <ul>
                    <li>
                        <span>December 2020</span>
                        <div className="content" style={{display: 'flex'}}>
                            <div>
                            <h3>Louisiana State University</h3>
                            <h2>Baton Rouge, Louisiana</h2>
                            <p>
                                Received Bachelor of Science recognition, majoring in Computer Science concentrated
                                <br/> in Software Engineering. LSU's backend centric program required
                            </p>
                            </div>
                            <img src={testImage} alt="test" style={{maxWidth: '15rem', maxHeight: '15rem'}}/>
                        </div>
                    </li>
                    <li>
                        <span>February 2021</span>
                        <div className="content">
                            <h3>Perficient: Technical Consultant</h3>
                            <h2>Lafayette, Louisiana</h2>
                            <p>
                                Perficient is a ditigal consulting company that servers fortune 500 companies<br/>
                                With clients spanning Asia, the Americas, and Europe, Perficient's global reach is one to be<br/>
                                recognized.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>March 2021</span>
                        <div className="content">
                            <h3>Maxar Technologies</h3>
                            <h2>Denver, Colorado</h2>
                            <p>
                                Maxar is a space technology company started in the 1960's. My contributions included <br/>
                                frontend and backend code bases, in a microservice, cloud-based infrastructure.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>May 2022</span>
                        <div className="content">
                            <h3>BlackLocus: Fullstack Developer</h3>
                            <h2>Austin, Texas</h2>
                            <p>
                                BlackLocus is the data mining division of The Home Depot. My contributions were to the data<br/>
                                validation portion of the application stack
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </Section>
);
};

export default AboutSection;