// This component is mounted in the page Summary.jsx

import React from "react";
import useQuizStore from "../../stores/useQuizStore";
import { Link } from "react-router-dom";

import "./Button.css";

export const RestartButton = () => {
    // Defines a function to handle the restart action
    const handleRestart = () => {
        // Calls the restart function from the quiz the quiz store to reset the quiz
        useQuizStore.getState().restart();
    };

    // Renders a Link to navigate to the 'home' page (Questions.jsx). When 'Restart'-button is clicked, it triggers the handleRestart function
    return (
        <div className="button-container">
            <Link to="/">
                <button type="button" onClick={handleRestart}>
                    Restart
                </button>
            </Link>
        </div>
    );
};
