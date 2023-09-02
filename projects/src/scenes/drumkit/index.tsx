import { useEffect, useRef, useState } from "react";
import "./style.css";
import Key from "./Key";

const DrumKit = () => {

    const keys = [{
        key: 'A',
        sound: 'clap',
    },
    {
        key: 'S',
        sound: 'hihat',
    },
    {
        key: 'D',
        sound: 'kick',
    },
    {
        key: 'F',
        sound: 'openhat',
    },
    {
        key: 'G',
        sound: 'boom',
    },
    {
        key: 'H',
        sound: 'ride',
    },
    {
        key: 'J',
        sound: 'snare',
    },
    {
        key: 'K',
        sound: 'tom',
    }, {
        key: 'L',
        sound: 'tink',
    }]
    
    const handleKeyPressed = (event: KeyboardEvent) => {
        const pressedKey = event.key.toUpperCase();
        const audio = document.querySelector(`audio[data-key="${pressedKey}"]`) as HTMLAudioElement;
        const key = document.querySelector(`.key[data-key="${pressedKey}"]`) as HTMLDivElement;
        if (!audio || !key)
            return ;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPressed);
        return () => {
            window.removeEventListener('keydown', handleKeyPressed);
        };
    }, []);


    return (
        <div>
            <div className="keys">
                {keys.map(({key, sound}, index) => <Key key={index} keyObj={key} sound={sound}/>)}
            </div>
        </div>

    );
}

export default DrumKit