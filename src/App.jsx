import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { CurrentOptions } from "./components/CurrentOptions";
import { NextButton } from "./components/NextButton";


export const App = () => {
  return (
    <div>

      <CurrentQuestionZustand />
      <CurrentOptions />
      <NextButton />
    </div>

  );
};
