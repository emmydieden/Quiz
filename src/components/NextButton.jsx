// This component is mounted in the page: Questions.jsx

import useQuizStore from "../stores/useQuizStore";
import "./NextButton.css"

export const NextButton = () => {
   
    //Creating a function to handle click of nextbutton
    const handleNext = () => {
        //Retrieve goToNextQuestion function from useQuizStore
        useQuizStore.getState().goToNextQuestion();
    };

    return (
        <div className="next-button-container">
            <button type="button" onClick={handleNext}>
                Next
            </button>
        </div>
    )
};