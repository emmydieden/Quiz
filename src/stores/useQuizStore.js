import { create } from "zustand";

// Define an array of quiz questions
const questions = [
  {
    id: 1,
    questionText: "Who set the Olympic record for the 100m dash in 2012?",
    options: ["Usain Bolt", "Justin Gatlin", "Tyson Gay", "Asafa Powell"],
    correctAnswerIndex: 0,
  },
  {
    id: 2,
    questionText: "When was Michael Phelps last named male World Swimmer of the Year?",
    options: ["2012", "2014", "2016", "2018"],
    correctAnswerIndex: 2,
  },
];

// Create a Zustand store named useQuizStore
const useQuizStore = create((set) => ({
  // Initial state of the store
  questions,                  // Array of quiz questions
  answers: [],                // Array to store user's answers
  currentQuestionIndex: 0,    // Index of the current question being displayed
  quizOver: false,            // Flag to indicate if the quiz is over

  // Action: submitAnswer
  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    //WE HAVE SENT THE CORRECT QUESTION ID AND ANSWER INDEX HERE!!!!
    console.log("questionid", questionId)
    console.log("answerIndex", answerIndex)

    // Error handling
    if (!question) {
      throw new Error("Could not find the question! Check to make sure you are passing the question id correctly.");
    }

    if (question.options[answerIndex] === undefined) {
      throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`);
    }

    // Update state with the user's answer
    set((state) => ({
      answers: [
        ...state.answers,
        {
          questionId,
          answerIndex,
          question,
          answer: question.options[answerIndex],
          isCorrect: question.correctAnswerIndex === answerIndex,
        },
      ],
    }));
  },

  // Action: goToNextQuestion
  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        // If the current question is the last one, mark the quiz as over
        return { quizOver: true };
      } else {
        // Otherwise, move to the next question
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  // Action: restart
  restart: () => {
    // Reset the quiz state
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },
}));

// Export the useQuizStore as the default export
export default useQuizStore;
