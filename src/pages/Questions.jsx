//This page is set as the 'home' page

import useQuizStore from "../stores/useQuizStore";

import { CurrentQuestionZustand } from "../components/CurrentQuestionZustand";
import { CurrentOptions } from "../components/CurrentOptions";
import { NextButton } from "../components/Buttons/NextButton";
import { ToSummaryButton } from "../components/Buttons/ToSummaryButton";
import { Timer } from "../components/Timer";




export const Questions = () => {
    
    
    const quizOver = useQuizStore((state) => state.quizOver);
    const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    const totalQuestions = useQuizStore((state) => state.questions.length);

    console.log("is quiz over", quizOver);

    return (
        <div className="questions-content-wrapper">
            <header className="question-header-h1">
                <h1>QUIZ</h1>
            </header>
            <CurrentQuestionZustand />
            <CurrentOptions />
            {/* Conditionally render either the "Summary" button or the "Next" button */}
            {quizOver || currentQuestionIndex === (totalQuestions - 1) ? ( 
            // If the quiz is over or it's the last question, show the "Summary" button
            <ToSummaryButton /> ) : (
            // If the quiz is not over and it's not the last question, show the "Next" button
            <NextButton />)}
            <Timer />
        </div>
    );
};
