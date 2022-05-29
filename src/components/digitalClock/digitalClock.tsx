import React, {useEffect, useRef, useState} from 'react';
import '../../styles/style.scss';
import Tilt from "react-parallax-tilt";

const DigitalClock = () => {
    const totExperienceDate = new Date('2017-08-17T00:00:15');
    const proExperienceDate = new Date('2021-03-08T00:00:00');
    //@ts-ignore
    const [rawTimeP, setRawTimeP] = useState((new Date() - proExperienceDate));
    //@ts-ignore
    const [rawTimeT, setRawTimeT] = useState((new Date() - totExperienceDate));
    // const [remainingMillis, setRemainingMillis] = useState(rawTime);
    //@ts-ignore
    const [rawTimeYearsT, setRawTimeYearsT] = useState((rawTimeT)/1000/60/60/24/365);
    const [rawTimeDaysT, setRawTimeDaysT] = useState((((rawTimeT)/1000/60/60/24/365)%1)*365);
    const [rawTimeHoursT, setRawTimeHoursT] = useState((((((rawTimeT)/1000/60/60/24/365)%1)*365)%1)*24);
    const [rawTimeMinutesT, setRawTimeMinutesT] = useState((((((((rawTimeT)/1000/60/60/24/365)%1)*365)%1)*24)%1)*60);
    const [rawTimeSecondsT, setRawTimeSecondsT] = useState((((((((((rawTimeT)/1000/60/60/24/365)%1)*365)%1)*24)%1)*60)%1)*60);

    const [rawTimeYearsP, setRawTimeYearsP] = useState((rawTimeP)/1000/60/60/24/365);
    const [rawTimeDaysP, setRawTimeDaysP] = useState((((rawTimeP)/1000/60/60/24/365)%1)*365);
    const [rawTimeHoursP, setRawTimeHoursP] = useState((((((rawTimeP)/1000/60/60/24/365)%1)*365)%1)*24);
    const [rawTimeMinutesP, setRawTimeMinutesP] = useState((((((((rawTimeP)/1000/60/60/24/365)%1)*365)%1)*24)%1)*60);
    const [rawTimeSecondsP, setRawTimeSecondsP] = useState((((((((((rawTimeP)/1000/60/60/24/365)%1)*365)%1)*24)%1)*60)%1)*60);

    const secsP = useRef();
    const minsP = useRef();
    const hoursP = useRef();
    const daysP = useRef();
    const yearsP = useRef();
    const secsT = useRef();
    const minsT = useRef();
    const hoursT = useRef();
    const daysT = useRef();
    const yearsT = useRef();

    useEffect(() => {
        //@ts-ignore
        secsP.current = Math.trunc(rawTimeSecondsP);
        //@ts-ignore
        secsT.current = Math.trunc(rawTimeSecondsT);
        //@ts-ignore
        minsP.current = Math.trunc(rawTimeMinutesP);
        //@ts-ignore
        minsT.current = Math.trunc(rawTimeMinutesT);
        //@ts-ignore
        hoursP.current = Math.trunc(rawTimeHoursP);
        //@ts-ignore
        hoursT.current = Math.trunc(rawTimeHoursT);
        //@ts-ignore
        daysP.current = Math.trunc(rawTimeDaysP);
        //@ts-ignore
        daysT.current = Math.trunc(rawTimeDaysT);
        //@ts-ignore
        yearsP.current = Math.trunc(rawTimeYearsP);
        //@ts-ignore
        yearsT.current = Math.trunc(rawTimeYearsT);
    }, [rawTimeSecondsP, rawTimeSecondsT])

    const convertTime = (oldTime: number, conversionNumber: number) => {
        //@ts-ignore
        setRawTime(new Date() - totExperienceDate);
    };

    const updateTimes = () => {
        // @ts-ignore
        console.log(new Date() - totExperienceDate)
    }

    useEffect(() => {
         setInterval(() => {
             //@ts-ignore
             if (secsP.current + 1< 60) {
                 //@ts-ignore
                 setRawTimeSecondsP(secsP?.current + 1);
             }
             else {
                 //@ts-ignore
                 setRawTimeSecondsP(0);
                 //@ts-ignore
                 if (minsP.current + 1 < 60) {
                     //@ts-ignore
                     setRawTimeMinutesP(minsP.current + 1 )
                 }
                 else {
                     setRawTimeMinutesP(0)
                     //@ts-ignore
                 if (hoursP.current + 1 < 24) {
                     //@ts-ignore
                     setRawTimeHoursP(hoursP.current + 1 )
                 }
                 else {
                     //@ts-ignore
                     setRawTimeHoursP(0 )
                     //@ts-ignore
                     if (daysP.current + 1 < 365) {
                         //@ts-ignore
                         setRawTimeDaysP(daysP.current + 1)
                     }
                     else {
                         //@ts-ignore
                         setRawTimeDaysP(0)
                         //@ts-ignore
                         setRawTimeYearsP(yearsP.current+1)
                     }
                 }}
             }

             //@ts-ignore
             if (secsT.current + 1< 60) {
                 //@ts-ignore
                 setRawTimeSecondsT(secsT?.current + 1);
             }
             else {
                 //@ts-ignore
                 setRawTimeSecondsT(0);
                 //@ts-ignore
                 if (minsT.current + 1 < 60) {
                     //@ts-ignore
                     setRawTimeMinutesT(minsT.current + 1 )
                 }
                 else {
                     setRawTimeMinutesT(0)
                     //@ts-ignore
                     if (hoursT.current + 1 < 24) {
                         //@ts-ignore
                         setRawTimeHoursT(hoursT.current + 1 )
                     }
                     else {
                         //@ts-ignore
                         setRawTimeHoursT(0 )
                         //@ts-ignore
                         if (daysT.current + 1 < 365) {
                             //@ts-ignore
                             setRawTimeDaysT(daysT.current + 1)
                         }
                         else {
                             //@ts-ignore
                             setRawTimeDaysT(0)
                             //@ts-ignore
                             setRawTimeYearsT(yearsT.current+1)
                         }
                     }}
             }
            // setRawTimeSecondsT(Math.trunc(rawTimeDaysT)+1);
        }, 1000);
        // return () => clearInterval(interval);
    }, []);

    return (
        <div style={{display: 'flex', color: 'green', fontSize: '15px', textShadow: '0 0 7px green, 0 0 10px green', justifyContent: 'space-evenly', alignContent: 'center', width: '100vw'}}>
            <div style={{color: 'white', display: 'flex', flexDirection: 'column'}}>
                <div>Total</div>
                <div>Experience:</div>
            </div>
            {/*<Tilt style={{transformStyle: 'preserve-3d'}} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={50}>*/}
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeYearsT)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    year(s)
                </div>
            </div>
            {/*</Tilt>*/}
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeDaysT)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    days(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeHoursT)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    hours(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeMinutesT)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    mintues(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeSecondsT)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    second(s)
                </div>
            </div>

            <div style={{color: 'white', display: 'flex', flexDirection: 'column'}}>
                <div>Professional</div>
                <div>Experience:</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeYearsP)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    year(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeDaysP)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    days(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeHoursP)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    hours(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeMinutesP)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    mintues(s)
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', maxHeight: '5px', fontSize: '20px', alignItems: 'center', justifyContent: 'center', marginRight: '3rem'}}>
                <div>
                    {Math.trunc(rawTimeSecondsP)}
                </div>
                <div style={{fontSize: '10px', lineHeight: '0'}}>
                    second(s)
                </div>
            </div>
        </div>
    );
}

export default DigitalClock