import useQuizStore from "../stores/useQuizStore"

export const NextButton = () => {
    const nextQuestion = useQuizStore.getState().goToNextQuestion()


    const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
    
    console.log("Next button", nextQuestion)
    return (
        <button type="button" onClick={nextQuestion}>
            Next
        </button>
        
    )
}