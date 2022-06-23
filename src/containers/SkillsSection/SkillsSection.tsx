import React, {useState} from 'react';
import '../../styles/style.scss';
//@ts-ignore
import SkillsRow from "../../components/skillsRow/skillsRow.tsx";
//@ts-ignore
import * as SkillRowConstants from '../../utilities/constants/skillsRowConstants.tsx';
//@ts-ignore
import paintBrushImg from '../../img/paintbrush.svg';
//@ts-ignore
import cloudImg from '../../img/cloud-service.svg'
//@ts-ignore
import serverImg from '../../img/server.png';
//@ts-ignore
import databaseImg from '../../img/database.svg';
//@ts-ignore
import pythonSVG from '../../img/icons8-python-50.svg';
//@ts-ignore
import springSVG from '../../svg/SpringSVG.tsx';
//@ts-ignore
import devopsImg from '../../img/testing.svg';
import {Section} from 'react-scroll-section';
import Quote from "../../components/quote/quote.tsx";
// import * as MAIN_NAME_CONSTANTS from "../../utilities/constants/mainNameConstants";


const SkillsSection = () => {

    const [currentCard, setCurrentCard] = useState(SkillRowConstants.PLACEHOLDER_INFO);

    return (
             <Section id={'skills'}>
                 <div style={{margin: '10vh 5vw 10vh 5vw'}}>
                     Skills
                 </div>
                 <div className='skills-section'>
                        <div style={{display: 'flex', flexDirection: 'column', marginRight: '3vw'}}>
                            <SkillsRow titleColor={'linear-gradient(90deg, rgba(244,0,255,1), rgba(170,11,248,1), rgba(246,6,103,1))'}
                                       title={SkillRowConstants.UI_ROW_TITLE}
                                       cardArgs={SkillRowConstants.UI_CARDS}
                                       direction={'l'}
                                       imagePath={paintBrushImg}
                                       setCard={setCurrentCard}/>
                            <SkillsRow titleColor={'linear-gradient(90deg, rgba(74,255,0,1) 0%, rgba(11,248,178,1) 50%, rgba(6,246,207,1) 100%)'}
                                       title={SkillRowConstants.SERVER_ROW_TITLE}
                                       cardArgs={SkillRowConstants.REST_CARDS}
                                       direction={'l'}
                                       imagePath={serverImg}
                                       setCard={setCurrentCard}/>
                            <SkillsRow titleColor={'linear-gradient(90deg, rgba(0,255,235,1) 0%, rgba(11,187,248,1) 50%, rgba(6,132,246,1) 100%)'}
                                       title={SkillRowConstants.CLOUD_SOLUTIONS_ROW_TITLE}
                                       cardArgs={SkillRowConstants.CLOUD_CARDS}
                                       direction={'l'}
                                       imagePath={cloudImg}
                                       setCard={setCurrentCard}/>
                            <SkillsRow titleColor={'brown'} title={SkillRowConstants.DBMS_ROW_TITLE}
                                       cardArgs={SkillRowConstants.DBMS_CARDS}
                                       direction={'l'}
                                       imagePath={databaseImg}
                                       setCard={setCurrentCard}/>
                            <SkillsRow titleColor={'blue'} title={SkillRowConstants.PROJECT_MANAGEMENT_ROW_TITLE}
                                       cardArgs={SkillRowConstants.PROJECT_MANAGEMENT_CARD_ARGS}
                                       direction={'l'}
                                       imagePath={devopsImg}
                                       setCard={setCurrentCard}/>
                        </div>
                    <div>
                        {/*<div className="card">*/}
                        {/*    Magic Card*/}
                        {/*</div>*/}
                        <div className='about-panel' style={{display: 'flex', height: '17%', width: '30vw', flexDirection: 'column', borderRadius: '10px', position: 'sticky', top: '5rem'}}>
                            <div style={{display: 'flex', alignItems: 'center', color: '#009FFD', fontSize: '10px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                                     fontSize: '20px', width: '100%', borderRight: 'solid white 0.5px', height: '100%', justifyContent: 'center'}}>
                                    Python
                                    {/*{springSVG()}*/}
                                    <img src={pythonSVG} alt="test" style={{margin: '1rem 0', height: '7rem', maxWidth: '8rem', fontSize: '12px'}}/>
                                    <div style={{fontSize: '15px'}}>Exp: 3 Years</div>
                                </div>
                                <div style={{fontSize: '12px', maxWidth: '100%', marginLeft: '.5rem'}}>
                                    {currentCard}
                                </div>
                            </div>
                            <div style={{ borderTop: 'solid white 0.5px', padding: '1rem 0 0 1rem'}}>
                                Related Technologies
                                <div style={{display: 'flex', flexDirection: 'row', listStyle: '-moz-initial'}}>
                                    <div>
                                        Tech1
                                    </div>
                                    <div>
                                        Tech2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
             </Section>
            );
};

export default SkillsSection;