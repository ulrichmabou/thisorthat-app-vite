import React from 'react'

const Prompt = (props) => {
    return (
        <div className="prompt-container">
            {
                !props.promptSent &&
                <div>
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
            }
        </div>
    )
}

export default Prompt

