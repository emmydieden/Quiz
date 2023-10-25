import useQuizStore from "../stores/useQuizStore";
import "./CurrentQuestion.css";

export const CurrentQuestionZustand = () => {
  // Retrieve the questions and current question index from the quiz store 
    const questions = useQuizStore((state) => state.questions);
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex
    );

    // Get the current questions based on the current index
    const question = questions[currentQuestionIndex];

    // Check if a valid question was found; if not, display an error message
    if (!question) {
        return <h1>Oh no! I could not find the current question!</h1>;
    }

    // Render the current question and question number
    return (
        <div className="question-card">
            <div className="question-counter-wrapper">
              <p>Question {currentQuestionIndex + 1}/5</p>
            </div>
            <h1>{question.questionText}</h1>
        </div>
    );
};
