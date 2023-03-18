import { useState, useEffect } from 'react'
import { Configuration, OpenAIApi } from 'openai'
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
  const [prompt, setPrompt] = useState('');
  const [promptSent, setPromptSent] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  useEffect(() => {
    async function generateText() {
      const configuration = new Configuration({ apiKey: apiKey, userAgent: 'ThisOrThat/1.0.0' });
      const openai = new OpenAIApi(configuration);
      const promptData = {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
        temperature: 1,
        top_p: 1,
        n: 1,
      };

      try {
        const response = await openai.createCompletion(promptData);
        const generatedText = response.data.choices[0].text;
        setGeneratedText(generatedText);
        console.log(generatedText);
      } catch (error) {
        console.error(error);
      }
    }
    if (promptSent) {
      generateText();
    }
  }, [prompt]);

  function handleButtonClick(buttonText) {
    setSelected(buttonText);
  }

  function handleSendPrompt() {
    const promptText = `A short fun paragraph about me who prefers ${selected} over ${selected === optionAText ? optionBText : optionAText}`
    setPrompt(promptText);
    setPromptSent(true);
  }

  function refreshPrompt() {
    const randomNumber = Math.floor(Math.random() * data.length);
    setOptionAText(data[randomNumber].optionA);
    setOptionBText(data[randomNumber].optionB);
    setSelected(null);
  }

  function refreshAll() {
    const randomNumber = Math.floor(Math.random() * data.length);
    setOptionAText(data[randomNumber].optionA);
    setOptionBText(data[randomNumber].optionB);
    setSelected(null);
    setPrompt('');
    setPromptSent(false);
    setGeneratedText('');
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
          <button className="refresh-btn" onClick={refreshPrompt}>
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
        response={generatedText}
      />
      {promptSent &&
        <div className="refresh-all">
          <button className="refresh-all-btn" onClick={refreshAll}>
            <FcRefresh />
          </button>
        </div>
      }
    </div>
  )
}

export default App
