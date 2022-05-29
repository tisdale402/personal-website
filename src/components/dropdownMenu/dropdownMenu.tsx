import React, {useEffect, useState} from 'react';
import '../../styles/style.scss';
//@ts-ignore
import Arrow from '../../img/kisspng-computer-icons-caret-next-button-5ac11a95e80dc1.5210349515226046939505.png';
interface IDropdownMenu {
    mainText: any;
    subItems: any[];
    isOpen?: boolean;
}
const DropdownMenu = ({mainText, subItems, isOpen}: IDropdownMenu) => {

    const [isSwitched, setIsSwitched] = useState(isOpen);

    // useEffect(() => {
    //
    // }, [])
    return (
        <div>
        <div style={{display: 'flex', alignItems: 'center'}} onClick={() => setIsSwitched(!isSwitched)}>
            <div style={{maxWidth: '1rem', maxHeight: '1rem', backgroundColor: 'white'}}>
                <img src={Arrow} alt=""/>
            </div>
            <div style={{marginLeft: '0.65rem'}}>
                {mainText}
            </div>
        </div>
            <div style={{marginLeft: '2.25rem'}}>
            {isSwitched && subItems.map((subItem) => (subItem))}
            </div>
        </div>

    //     <div>
    //     <div style={{marginLeft: '1.25rem'}}>
    //         Work History
    //     </div>
    // <ul style={{ listStyle: 'none', marginLeft: '2.25rem'}}>
    //     <li>
    //         Perficient (Mar. 2021 - Present):
    //     </li>
    //     <li>
    //         Technical Consultant (Mar. 2022 - Present)
    //     </li><li>
    //     Fullstack Developer
    // </li><li>
    //     Associate Technical Consultant (Mar. 2021 - Feb. 2021)
    // </li>
    //     <li>
    //         Jr. Frontend Developer
    //     </li>
    // </ul><ul style={{ listStyle: 'none', marginLeft: '2.25rem'}}>
    //     <li>
    //         Perficient (Mar. 2021 - Present):
    //     </li>
    //     <li>
    //         Technical Consultant (Mar. 2022 - Present)
    //     </li><li>
    //     Fullstack Developer
    // </li><li>
    //     Associate Technical Consultant (Mar. 2021 - Feb. 2021)
    // </li>
    //     <li>
    //         Jr. Frontend Developer
    //     </li>
    // </ul>
    //     </div>
    )
}

export default DropdownMenu;