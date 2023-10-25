// Page for the summary which is shown after all questions are answered. This component is mounted in the page 'Summary.jsx'

import useQuizStore from "../stores/useQuizStore";

export const SummaryResponse = () => {
    //Retrieve the user's answers from the quiz store
    const answers = useQuizStore((state) => state.answers);

    //Log to see the user's answers to the console
    console.log("answers:", answers);

    //Creating a variable to hold number of correct answers
    //Reduce uses isCorrect from every object in the array and combines the incorrect to a single result
    // Calculate the sum of correct answers from an array of answer objects
    const sumOfCorrectAnswers = answers.reduce((total, answer) => {
        // Check if the current answer is correct, if it is correct, add 1 to the total; otherwise, add 0
        return total + (answer.isCorrect ? 1 : 0);
    }, 0);

    // Log to see the total number of correct answers to the console
    console.log("Total Correct Answers:", sumOfCorrectAnswers);

    // Initalizing a variable to store the summary response
    let summaryResponse = "";
    //Determines the summary response based on the number of correct answers
    if (sumOfCorrectAnswers === 0 || sumOfCorrectAnswers === 1) {
        summaryResponse =
            "Oups, maybe you should read up a bit and try again, you can do it!";
    } else if (sumOfCorrectAnswers === 2 || sumOfCorrectAnswers === 3) {
        summaryResponse =
            "Almost there! But... try again, we think you can do better!";
    } else if (sumOfCorrectAnswers === 4) {
        summaryResponse = "Great! Almost all correct!";
    } else {
        summaryResponse = "Amazing! You're a genius!";
    }

    // Render the summary response and the number of correct answers
    return (
        <>
            <h2>{summaryResponse}</h2>
            <p>{sumOfCorrectAnswers}/5 correct answers!</p>
        </>
    );
};
