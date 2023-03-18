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
            {props.promptSent && <p className="feedback-response">{props.response}</p>}
        </div>
    )
}

export default Feedback