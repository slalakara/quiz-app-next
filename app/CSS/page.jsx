"use client"
import Header from "@/components/header"

import { useState } from "react"

export default function Sorular() {
  const [errorState, setErrorState] = useState({});
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />
      <h1></h1>
    </>
  )
}