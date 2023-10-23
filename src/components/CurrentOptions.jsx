import useQuizStore from "../stores/useQuizStore";


export const CurrentOptions = () => {
    const questions = useQuizStore((state) => state.questions)
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex
    );
    const question = questions[currentQuestionIndex];
    const options = question.options
    const { submitAnswer } = useQuizStore()
    //useQuizStore.getState().submitAnswer(question, index)  ; //submitAnswer: (questionId, answerIndex)

    console.log(submitAnswer)
    return (
        <div>

            {options.map((option, index) => {
                return (<button key={index} type="radio" alt="option-button">{option}</button>)
            })}

        </div>
    )
}
