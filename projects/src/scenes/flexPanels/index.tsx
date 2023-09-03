
import "./style.css";

const PanelContent = ({ title }: {title: string}) => {
    return (
        <>
            {title.split(' ').map((text, index) => <p key={index}>{text}</p>)}
        </>
    )
}

const FlexPanels = () => {

    const handlePanelClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
    }

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (e.propertyName.includes('flex'))
            e.currentTarget.classList.toggle('open-active');
    }

    const phrases = ["Hey Let's Dance", "Give Take Receive", "Experience It Today", "Appreciate Your Day", "Life In Motion"];

    return (
        <div className="panels">
            {Array.from(phrases, (phrase, index) => (
                <div key={index} onClick={handlePanelClicked} onTransitionEnd={handleTransitionEnd} className={`panel panel${index + 1}`}>
                    <PanelContent title={phrase}/>
                </div>)
            )}
        </div>);

}

export default FlexPanels;