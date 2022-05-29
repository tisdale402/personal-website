import React, {useState} from 'react';
import '../../../styles/style.scss';
//@ts-ignore
import phoneIMG from '../../../img/phone-icon-928.png'

import ContactModal from "../../contactModal/contactModal";

const ContactButton = () => {
    const [isActive, setIsActive] = useState(false);
    const [color, setColor] = useState('black');
    return (
        <React.Fragment>
            <div style={{display: "flex", flexDirection: 'column', alignContent: 'space-between', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', fontSize: '20px'}} className='nav_btn' onClick={() => {
                setIsActive(!isActive)
                !isActive ? setColor('white') :  setColor('black')
            }}>
                <img src={phoneIMG} style={{maxWidth: '3.5rem', maxHeight: '3.25rem'}} alt=""/>
                <div  style={{color: color}}>
                Contact
                 </div>

            </div>
                {isActive && <div style={{display: 'flex',
                    // width: '95vw',
                    // maxHeight: '100px',
                    // justifyContent: 'center',
                    // alignItems: 'center'
                }}><ContactModal/></div>}
            </div>

        </React.Fragment>
    )
};

export default ContactButton;