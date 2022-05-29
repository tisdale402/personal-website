import React from 'react';
import '../../styles/style.scss';

const Footer = () => (
    <div className='footer'>
        <div style={{position: 'absolute', bottom: '0', left: '0'}}>Copyright &copy; 2022 alextisdale</div>
        <div style={{position: 'absolute', bottom: '0', right: '46.25%'}}>SPA; powered by React.js</div>
        <div style={{position: 'absolute', bottom: '0', right: '0'}}>v.0.5.3-initial_commit</div>
    </div>
);

export default Footer;