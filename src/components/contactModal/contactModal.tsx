import React from 'react';
import '../../styles/style.scss';
//@ts-ignore
import githubIMG from '../../img/GitHub-Mark-Light-120px-plus.png'
//@ts-ignore
import emailIMG from '../../img/[CITYPNG.COM]Download Letter Email Round Black Icon PNG - 512x512.png'
//@ts-ignore
import linkedinIMG from '../../img/white-linkedin-icon-transparent-background-5.jpg'
const ContactModal = () => {
    return  (
        <div className='modal'>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={githubIMG} style={{maxWidth: '5rem', maxHeight: '5rem'}} alt=""/>
                {/*<a href="https://www.google.com">Google</a>*/}
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={emailIMG} style={{maxWidth: '5rem', maxHeight: '5rem'}} alt=""/>
                {/*<a href="https://www.google.com">Email</a>*/}
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={linkedinIMG} style={{maxWidth: '5rem', maxHeight: '5rem'}} alt=""/>
                {/*<a href="https://www.google.com">LinkedIn</a>*/}
            </div>
        </div>
    )
};

export default ContactModal;