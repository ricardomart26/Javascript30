import { useState } from "react";
import "./style.css";

const CssVariables = () => {

    const [spacing, setSpacing] = useState("10");
    const [blurSetting, setBlur] = useState("10");
    const [color, setColor] = useState("#ffc600");

    const handleChangingEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        let suffix: string = e.target.dataset.sizing as string;
        if (suffix === undefined)
            suffix = "";
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
        // setSpacing(e.target.value);
    }

    const handleSpacing = (e: React.ChangeEvent<HTMLInputElement>) => {
        let suffix: string = e.target.dataset.sizing as string;
        document.documentElement.style.setProperty("--spacing", e.target.value + suffix);
        setSpacing(e.target.value);
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        let suffix: string = e.target.dataset.sizing as string;
        document.documentElement.style.setProperty("--blur", e.target.value + suffix);
        setBlur(e.target.value);
    }

    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty("--base", e.target.value);
        setColor(e.target.value);
    }

    return (
        <div>
            <h2> Update Css Variables with <span className="h1">JS</span></h2>
            <div className="controls">
                <label htmlFor="spacing">Spacing:</label>
                <input onChange={handleSpacing} type="range" name="spacing" min="10" max="200" value={spacing} data-sizing="px"/>

                <label htmlFor="blur">Blur:</label>
                <input onChange={handleBlur} type="range" name="blur" min="0" max="25" value={blurSetting} data-sizing="px"/>
        
                <label htmlFor="base">Base color:</label>
                <input onChange={handleColor} type="color" name="base" value={color}/>
            </div>
            <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500"/>
        </div>
    );
}




export default CssVariables;