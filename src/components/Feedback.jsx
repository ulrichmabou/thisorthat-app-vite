import React from 'react'

const Feedback = (props) => {
    return (
        <div className="feedback-container">
            <p className="feedback-text">You selected: {props.selection && <span>{props.selection}</span>}</p>
            {props.selection && <p className="feedback-prompt">
                You are someone who prefers {props.selection === props.optionAText ? props.selection : props.optionBText} over {props.selection === props.optionAText ? props.optionBText : props.optionAText}.</p>}
            {props.description && <p className="feedback-description">{props.description}</p>}
        </div>
    )
}

export default Feedback