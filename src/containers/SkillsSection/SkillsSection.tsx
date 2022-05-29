import React, {useState} from 'react';
import '../../styles/style.scss';
//@ts-ignore
import SkillsRow from "../../components/skillsRow/skillsRow.tsx";
//@ts-ignore
import * as SkillRowConstants from '../../utilities/constants/skillsRowConstants.ts';
//@ts-ignore
import paintBrushImg from '../../img/103414.png';
//@ts-ignore
import cloudImg from '../../img/cloud-computing.png'
//@ts-ignore
import serverImg from '../../img/server.png';
//@ts-ignore
import databaseImg from '../../img/database.png';
//@ts-ignore
import devopsImg from '../../img/devops.png';
import {Section} from 'react-scroll-section';


const SkillsSection = () => {
    return (
 <Section id={'skills'}>

    <div className='skills-section'>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <i className="icon il-cloud_19"></i>
                <SkillsRow titleColor={'linear-gradient(90deg, rgba(244,0,255,1), rgba(170,11,248,1), rgba(246,6,103,1))'}
                           title={SkillRowConstants.UI_ROW_TITLE}
                           cardArgs={SkillRowConstants.UI_CARDS}
                           direction={'l'}
                           imagePath={paintBrushImg}
                />
                <SkillsRow titleColor={'linear-gradient(90deg, rgba(74,255,0,1) 0%, rgba(11,248,178,1) 50%, rgba(6,246,207,1) 100%)'}
                           title={SkillRowConstants.SERVER_ROW_TITLE}
                           cardArgs={SkillRowConstants.REST_CARDS}
                           direction={'l'}
                           imagePath={serverImg}
                />
                <SkillsRow titleColor={'linear-gradient(90deg, rgba(0,255,235,1) 0%, rgba(11,187,248,1) 50%, rgba(6,132,246,1) 100%)'}
                           title={SkillRowConstants.CLOUD_SOLUTIONS_ROW_TITLE}
                           cardArgs={SkillRowConstants.CLOUD_CARDS}
                           direction={'l'}
                           imagePath={cloudImg}

                />
                <SkillsRow titleColor={'brown'} title={SkillRowConstants.DBMS_ROW_TITLE}
                           cardArgs={SkillRowConstants.DBMS_CARDS}
                           direction={'l'}
                           imagePath={databaseImg}
                />
                <SkillsRow titleColor={'blue'} title={SkillRowConstants.PROJECT_MANAGEMENT_ROW_TITLE}
                           cardArgs={SkillRowConstants.PROJECT_MANAGEMENT_CARD_ARGS}
                           direction={'l'}
                           imagePath={devopsImg}
                />
            </div>
            <div>
            <div className='about-panel' style={{maxHeight: '30%', borderRadius: '25px'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A aliquam aperiam commodi consequatur deleniti, ea ex exercitationem facere iste,
                maxime mollitia pariatur perferendis possimus quidem sint temporibus, unde! Dignissimos, modi.
            </div>
            </div>
        </div>
 </Section>
    );
};

export default SkillsSection;