"use client"
import Header from "@/components/header"
import Data from "@/app/data/data.json"
import { useState } from "react"

export default function Sorular() {
  const [errorState, setErrorState] = useState({});
  const [step, setStep] = useState(1);

  const question = Data.filter(item => item.kategoriId === 1);
  const currentQuestion = question[step - 1];

  const handleNext = () => {
    if (step < question.length) {
      setStep(prevStep => prevStep + 1);
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  }

  return (
    <>
      <Header />
      <h1>{`Question ${step}`}</h1>
      <p>{currentQuestion.question}</p>

      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>

      <div>
        <button onClick={handlePrevious} disabled={step === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={step === question.length}>
          Next
        </button>
      </div>
    </>
  )
}