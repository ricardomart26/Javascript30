

window.addEventListener('keydown', (event: KeyboardEvent) => {
    const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${event.key.toUpperCase()}"]`) as HTMLAudioElement;
    const keyPressed: HTMLDivElement = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`) as HTMLDivElement
    console.log(audio);
    console.log(keyPressed);

    
    if (!audio) return ;
    audio.currentTime = 0;
    audio.play();
    keyPressed.classList.add('playing');
});


function removeTransition(event: TransitionEvent) {
    if (event.propertyName !== 'transform') return ;
    this.classList.remove('playing');
}

const keysTags: NodeListOf<Element> = document.querySelectorAll('.key') as NodeListOf<Element>;
keysTags.forEach((key) => key.addEventListener('transitionend', removeTransition as EventListener))

