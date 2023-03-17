import React from 'react'

const Prompt = (props) => {
    return (
        <div className="prompt-container">
            <button
                className="prompt-btn"
                onClick={() => props.onButtonClick(props.optionAText)}>
                {props.optionAText}
            </button>
            <span className="prompt-text">OR</span>
            <button
                className="prompt-btn"
                onClick={() => props.onButtonClick(props.optionBText)}>
                {props.optionBText}
            </button>
            <span className="prompt-text">?</span>
        </div>
    )
}

export default Prompt

