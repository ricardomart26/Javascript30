import { useEffect, useRef } from "react";


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

export default Key;