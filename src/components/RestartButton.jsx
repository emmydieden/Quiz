import React from 'react'
import useQuizStore from "../stores/useQuizStore";

export const RestartButton = () => {

    const handleRestart = () => {
        useQuizStore.getState().restart();
    };

  return (
    <>
    <button type="button" onClick={handleRestart}>
                Restart
            </button>
    </>
  )
}
