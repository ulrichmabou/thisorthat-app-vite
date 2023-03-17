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
  const [description, setDescription] = useState('');

  function handleButtonClick(buttonText) {
    setSelected(buttonText);
    const randomNumber = Math.floor(Math.random() * data.length);
    setOptionAText(data[randomNumber].optionA);
  }

  function refreshPrompt() {
    // TODO - hook refresh button
    console.log("clicked!")
  }

  return (
    <div className="app-container">
      <Header />
      <Prompt
        optionAText={optionAText}
        optionBText={optionBText}
        selection={selected}
        onButtonClick={handleButtonClick}
      />
      <div className="refresh">
        <button className="refresh-btn" onClick={refreshPrompt}>
          <FcRefresh />
        </button>
      </div>
      <Feedback
        optionAText={optionAText}
        optionBText={optionBText}
        selection={selected}
        description={description}
      />
    </div>
  )
}

export default App
