import { useEffect, useRef, useState } from "react";
import "./style.css";


const Key = ({ keyObj, sound }: {keyObj: string, sound: string}) => {

    const keyRef = useRef<HTMLDivElement>(null);

    function handleTransitionEnd(e: TransitionEvent) {
        if (e.propertyName !== 'transform') return ;
        keyRef.current?.classList.remove('playing');
    }
    
    useEffect(() => {
        console.log("teste");
        keyRef.current?.addEventListener('transitionend', handleTransitionEnd as EventListener);
        return () => {
            keyRef.current?.removeEventListener('transitionend', handleTransitionEnd as EventListener);
        };
    }, []);

    return (
        <div ref={keyRef} data-key={keyObj} className="key">
            <h1>{keyObj}</h1>
            <span className="sound">{sound}</span>
            <audio data-key={keyObj} src={`sounds/${sound}.wav`}></audio>
        </div>
    );
}

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
        <div className="content-drumkit">
            <div className="keys">
                {keys.map(({key, sound}, index) => <Key key={index} keyObj={key} sound={sound}/>)}
            </div>
        </div>

    );
}

export default DrumKit