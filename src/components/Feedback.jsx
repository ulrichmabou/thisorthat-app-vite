import { useState } from 'react'
import { FcNext } from "react-icons/fc";

const Feedback = (props) => {

    const [promptSent, setPromptSent] = useState(false);

    function sendPrompt() {
        setPromptSent(true);
        console.log("sending...");
    }

    return (
        <div className="feedback-container">
            {props.selection && <p className="feedback-text">You selected: <span>{props.selection}</span></p>}
            {props.selection &&
                <div className="next">
                    <button className="next-btn" onClick={sendPrompt}>
                        <FcNext />
                    </button>
                </div>
            }
            {promptSent && <p className="feedback-prompt">
                You are someone who prefers {props.selection === props.optionAText ? props.selection : props.optionBText} over {props.selection === props.optionAText ? props.optionBText : props.optionAText}.</p>}
            {props.description && <p className="feedback-description">{props.description}</p>}
        </div>
    )
}

export default Feedback