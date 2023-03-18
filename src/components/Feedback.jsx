import { useState } from 'react'
import { FcNext } from "react-icons/fc";

const Feedback = (props) => {

    return (
        <div className="feedback-container">
            {props.selection && <p className="feedback-text">{props.selection}</p>}
            {props.selection &&
                <div className="next">
                    {
                        !props.promptSent &&
                        <button className="next-btn" onClick={props.sendPrompt}>
                            <FcNext />
                        </button>
                    }
                </div>
            }
            {props.promptSent && <p className="feedback-prompt">
                You are someone who prefers {props.selection === props.optionAText ? props.selection : props.optionBText} over {props.selection === props.optionAText ? props.optionBText : props.optionAText}.</p>}
            {props.description && <p className="feedback-description">{props.description}</p>}
        </div>
    )
}

export default Feedback