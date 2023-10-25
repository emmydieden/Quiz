// This component is mounted in the page: Summary.jsx

import React from "react";
import useQuizStore from "../stores/useQuizStore";
import { Link } from "react-router-dom";

export const RestartButton = () => {
    // Defines a function to handle the restart action
    const handleRestart = () => {
        // Calls the restart function from the quiz the quiz store to reset the quiz
        useQuizStore.getState().restart();
    };

    return (
        <>
            <Link to="/">
                <button type="button" onClick={handleRestart}>
                    Restart
                </button>
            </Link>
        </>
    );
};
