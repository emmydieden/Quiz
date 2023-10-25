import useQuizStore from "../stores/useQuizStore";

export const SummaryResponse = () => {

    const answers = useQuizStore((state) => state.answers);

    console.log("answers:", answers)

    //Creating a variable to hold number of correct answers
    //Reduce uses isCorrect from every object in the array and combines the incorrect to a single result
    // Calculate the sum of correct answers from an array of answer objects
    const sumOfCorrectAnswers = answers.reduce((total, answer) => {
   // Check if the current answer is correct
   // If it is correct, add 1 to the total; otherwise, add 0
        return total + (answer.isCorrect ? 1 : 0);
      }, 0);
      
    console.log("Total Correct Answers:", sumOfCorrectAnswers);

    let summaryResponse = ""; 
    if (sumOfCorrectAnswers === 0 || sumOfCorrectAnswers === 1) {
        summaryResponse = "Not a very good job."
    } else if (sumOfCorrectAnswers === 2 || sumOfCorrectAnswers === 3) {
        summaryResponse = "Not a great job, but it's ok"
    } else if (sumOfCorrectAnswers === 4) {
        summaryResponse = "Great!! Almost all correct!"
    } else {
        summaryResponse = "Amazing!!!"
    }

    



    return (
        <>
            <h2>{summaryResponse}</h2>
        </>
    )
};

