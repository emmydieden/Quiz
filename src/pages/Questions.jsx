import React from 'react'
import useQuizStore from "../stores/useQuizStore";

import { CurrentQuestionZustand } from "../components/CurrentQuestionZustand";
import { CurrentOptions } from "../components/CurrentOptions";
import { NextButton } from "../components/NextButton";
import { Link } from "react-router-dom";



export const Questions = () => {

  const quizOver = useQuizStore((state) => state.quizOver);

  console.log("is quiz over",quizOver);

  return (
    <>
    <CurrentQuestionZustand />
    <CurrentOptions />
    {quizOver ? <Link to="/summary"><button>END</button> </Link> : <NextButton />}
    </>
  )
}

