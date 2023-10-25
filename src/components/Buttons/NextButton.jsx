// This component is mounted in the page: Questions.jsx

import useQuizStore from "../../stores/useQuizStore";
import "./Button.css";

export const NextButton = () => {
    //Creating a function to handle click of nextbutton
    const handleNext = () => {
        //Retrieve goToNextQuestion function from useQuizStore
        useQuizStore.getState().goToNextQuestion();
    };

    return (
        <div className="button-container">
            <button type="button" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};
