import { useState } from "react";
import "./style.css";

const CssVariables = () => {

    const [spacing, setSpacing] = useState("10");
    const [blurSetting, setBlur] = useState("10");
    const [color, setColor] = useState("#ffc600");

    const handleChangingEvent = (e: React.ChangeEvent<HTMLInputElement>, stateFunction: (value: string) => void) => {
        let suffix: string = e.target.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
        stateFunction(e.target.value);
    }
    return (
        <div>
            <h2> Update Css Variables with <span className="h1">JS</span></h2>
            <div className="controls">
                <label htmlFor="spacing">Spacing:</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangingEvent(e, setSpacing)} type="range" name="spacing" min="10" max="200" value={spacing} data-sizing="px"/>

                <label htmlFor="blur">Blur:</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangingEvent(e, setBlur)} type="range" name="blur" min="0" max="25" value={blurSetting} data-sizing="px"/>
        
                <label htmlFor="base">Base color:</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangingEvent(e, setColor)} type="color" name="base" value={color}/>
            </div>
            <img alt="random image" src="https://source.unsplash.com/7bwQXzbF6KE/800x500"/>
        </div>
    );
}




export default CssVariables;