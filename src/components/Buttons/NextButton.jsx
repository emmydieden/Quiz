// This component is mounted in the page: Questions.jsx

import useQuizStore from "../../stores/useQuizStore";
import "./Button.css";

export const NextButton = () => {

//----- New code ---------

    // Retrieve selected answer index for the current question from the store
  const selectedAnswerIndex = useQuizStore((state) => state.answers[state.currentQuestionIndex]?.answerIndex);


     // Handle click of the "Next" button
  const handleNext = () => {
    // Check if an option is selected for the current question
    if (selectedAnswerIndex !== undefined) {
        
      // If an option is selected, proceed to the next question
      useQuizStore.getState().goToNextQuestion();
    }
    // If no option is selected, do nothing (button remains disabled).
  }


  return (
    
    <div className="button-container"> 
      <button className="btn-donate" type="button" onClick={handleNext} disabled={selectedAnswerIndex === undefined}> 
        Next
      </button>




    </div>





  );
}



// In this ^ code, we first retrieve the selected answer index for the current question 
//from the store using the useQuizStore hook. We then use the disabled attribute in the 
//button element to disable the "Next" button by default (i.e., when selectedAnswerIndex 
//is undefined), and enable it only when an option is selected (i.e., when selectedAnswerIndex 
//is not undefined). This prevents the user from proceeding to the next question without 
//selecting an option.





// ----- Old code -----

// //Creating a function to handle click of nextbutton
//  const handleNext = () => {
//      //Retrieve goToNextQuestion function from useQuizStore
//      useQuizStore.getState().goToNextQuestion()
//  }


//     return (
//         <div className="button-container">
//             <button type="button" onClick={handleNext}>
//                 Next
//             </button>
//         </div>
//     )
// }
