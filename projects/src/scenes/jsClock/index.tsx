import { useEffect, useState } from "react";
import "./style.css";


const JsClock = () => {
    
    const [secondsDegrees, setSecondsDegrees] = useState(0);
    const [minutesDegrees, setMinutesDegrees] = useState(0);
    const [hoursDegrees, setHoursDegrees] = useState(0);
  

    useEffect(() => {
        
        const setDate = () => {
            const date = new Date();
            setSecondsDegrees((date.getSeconds() / 60 * 360) + 90)
            setMinutesDegrees((date.getMinutes() / 60 * 360) + 90)
            setHoursDegrees((date.getHours() / 12 * 360) + 90)
        }

        const interval = setInterval(setDate, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock">
            <div className="hand hour-hand" style={{ transform: `rotate(${hoursDegrees}deg)` }}></div>
            <div className="hand min-hand" style={{ transform: `rotate(${minutesDegrees}deg)` }}></div>
            <div className="hand second-hand" style={{ transform: `rotate(${secondsDegrees}deg)` }}></div>  
        </div>       
    )
}

export default JsClock;