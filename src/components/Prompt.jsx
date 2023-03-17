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
            {
                props.promptSent && 
                <h4 className="prompt-text"><span>{props.optionAText}</span> or <span>{props.optionBText}</span> </h4>
            }
        </div>
    )
}

export default Prompt

