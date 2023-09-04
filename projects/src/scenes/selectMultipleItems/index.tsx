
import "./style.css";

const SelectMultipleItems = () => {

    return (
        <div className="inbox">
            <div className="item">
                <input type="checkbox"/>
                <p>This is an inbox layout.</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Check one item</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Hold down your Shift key</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Check a lower item</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Everything in between should also be set to checked</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Try to do it without any libraries</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Just regular JavaScript</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Good Luck!</p>
            </div>
            <div className="item">
                <input type="checkbox"/>
                <p>Don't forget to tweet your result!</p>
            </div>
        </div>
    );
}

export default SelectMultipleItems;