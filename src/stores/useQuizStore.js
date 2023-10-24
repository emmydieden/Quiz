import { create } from "zustand";

// Define an array of quiz questions
const questions = [
  {
    id: 1,
    questionHeading: `Geography`,
    questionText: `Which country is known as the Land of the Rising Sun?`,
    options: [`China`, `South Korea`, `Japan`, `Thailand`],
    correctAnswerIndex: 2,
  },
  {
    id: 2,
    questionHeading: `Heroes`,
    questionText: `What is the alter ego of the superhero who dresses like a bat and has a butler named Alfred?`,
    options: [`Superfly`, `Iron Man`, `Captain America`, `Batman`],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    questionHeading: `Music`,
    questionText: `Which rock band is famous for their hit song "Bohemian Rhapsody"?`,
    options: [`The Rolling Stones`, `The Beatles`, `Led Zeppelin`, `Queen`],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    questionHeading: `Biology`,
    questionText: `Which of these creatures are known for its incredible memory?`,
    options: [`Goldfish`, `Elephant`, `Squirrel`, `Jellyfish`],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionHeading: `Science`,
    questionText: `What is the smallest unit of matter?`,
    options: [`Atom`, `Molecule`, `Cell`, `Quark`],
    correctAnswerIndex: 0,
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
