import useQuizStore from "../stores/useQuizStore"

export const NextButton = () => {

    //Retrieve the goToNextFuntion-method from the main state "useQuizStore" and naming it "HandleNext"
    const handleNext = () => {
        useQuizStore.getState().goToNextQuestion()
    }

    return (
        <>
        <button type="button" onClick={handleNext}>
            Next
        </button>
        </>
        
    )
}