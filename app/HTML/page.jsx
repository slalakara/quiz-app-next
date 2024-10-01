"use client"
import Header from "@/components/header"
import Data from "@/app/data/data.json"
import { useState } from "react"

export default function Sorular() {
  const [errorState, setErrorState] = useState({});
  const [step, setStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const question = Data.filter(item => item.kategoriId === 1);
  const currentQuestion = question[step - 1];

  const handleAnswer = (option) => {
    setSelectedOption(option);

    if (option === currentQuestion.answer) {
      setCorrectAnswer(option);
    } else {
      setCorrectAnswer(currentQuestion.answer);
      setTimeout(() => {
        handleNextQuestion();
      }, 1000);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      setFeedback("Lütfen bir cevap seçin.");
      return;
    }

    if (step < question.length) {
      setStep(prevStep => prevStep + 1);
      setSelectedOption(null);
      setFeedback('');
    } else {
      // Son soru bittiğinde bir şey yapabilirsiniz
    }
  };

  const getOptionClass = (option) => {
    if (selectedOption === null) return '';

    if (option === selectedOption) {
      return option === currentQuestion.answer ? 'correct' : 'wrong';
    }
    return '';
  };

  return (
    <>
      <Header />
      <div className="question-info">
        <p>Question {step} / {question.length}</p>
      </div>
      <h2 className="question-text">{currentQuestion.question}</h2>

      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${getOptionClass(option)}`}
            onClick={() => handleAnswer(option)}
            disabled={selectedOption !== null}
          >
            <span className={`option-letter ${getOptionClass(index)}`}>
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="option-text">{option.replace(/<button[A-E] ><\/button>/g, '')}</span>
          </button>
        ))}
      </div>

      <div>
        <button className="NextQuestion" onClick={handleNextQuestion} disabled={step === question.length}>
          Cevabı Gönder
        </button>
      </div>
      {feedback && (
        <div className="feedback">
          {feedback}
        </div>
      )}
    </>
  )
}
