import { useState } from 'react'
import Header from './components/Header'
import Prompt from './components/Prompt'
import Feedback from './components/Feedback'
import { FcRefresh } from "react-icons/fc";
import data from './Data'
import './App.css'


function App() {
  const randomNumber = Math.floor(Math.random() * data.length);
  const [optionAText, setOptionAText] = useState(data[randomNumber].optionA);
  const [optionBText, setOptionBText] = useState(data[randomNumber].optionB);
  const [selected, setSelected] = useState(null);
  const [promptSent, setPromptSent] = useState(false);
  // const [description, setDescription] = useState('');

  function handleButtonClick(buttonText) {
    setSelected(buttonText);
  }

  function refresh() {
    const randomNumber = Math.floor(Math.random() * data.length);
    setOptionAText(data[randomNumber].optionA);
    setOptionBText(data[randomNumber].optionB);
    setSelected(null);
  }

  function handleSendPrompt() {
    setPromptSent(true);
  }

  return (
    <div className="app-container">
      <Header />
      <Prompt
        optionAText={optionAText}
        optionBText={optionBText}
        selection={selected}
        onButtonClick={handleButtonClick}
        promptSent={promptSent}
      />
      {!selected &&
        <div className="refresh">
          <button className="refresh-btn" onClick={refresh}>
            <FcRefresh />
          </button>
        </div>
      }
      <Feedback
        optionAText={optionAText}
        optionBText={optionBText}
        selection={selected}
        promptSent={promptSent}
        sendPrompt={handleSendPrompt}
        // description={description}
      />
    </div>
  )
}

export default App
