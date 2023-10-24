// import useQuizStore from "../stores/useQuizStore";


// export const CurrentOptions = () => {
//     const questions = useQuizStore((state) => state.questions)
//     const currentQuestionIndex = useQuizStore(
//         (state) => state.currentQuestionIndex
//     );
//     const question = questions[currentQuestionIndex];
//     const options = question.options
//     // const { submitAnswer } = useQuizStore()

//     console.log("questionID:",question.id)
    
//     //useQuizStore.getState().submitAnswer(question.id, index)  ; //submitAnswer: (questionId, answerIndex)


// const handleAnswerSelection = (answerIndex) => {
//     // Get the question's ID
//     const questionId = question.id;

//     // Call the submitAnswer function from the store
//     useQuizStore.getState().submitAnswer(questionId, answerIndex);
//   };



    
//     return (
//         <div>

//             {options.map((option, index) => {
//                 return (<button onClick={() => handleAnswerSelection(index)} key={index} type="radio" alt="option-button">{option}</button>)
//             })}

//         </div>
//     )
// }


import useQuizStore from "../stores/useQuizStore";

export const CurrentOptions = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore((state) => state.currentQuestionIndex);
  const question = questions[currentQuestionIndex];
  const options = question.options;

  const submitAnswer = (answerIndex) => {
    useQuizStore.getState().submitAnswer(question.id, answerIndex);
  };

//  const isCorrect = () => {
//     useQuizStore.getState().answers[currentQuestionIndex].isCorrect
//  }

  return (
    <div>
      <p>{question.questionText}</p>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            type="radio"
            alt="option-button"
            onClick={() => submitAnswer(index)}
          >
            {option}
          </button>
        );
      })}

      {useQuizStore.getState().answers.length > currentQuestionIndex ? (
        useQuizStore.getState().answers[currentQuestionIndex].isCorrect ? (
          <p>Correct Answer!</p>
        ) : ( 
          <p>Wrong Answer!</p>
        )
      ) : null} 
      
    </div>
  );
};



