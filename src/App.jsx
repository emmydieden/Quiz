import { CurrentQuestionZustand } from "./components/CurrentQuestionZustand";
import { CurrentOptions } from "./components/CurrentOptions";
import { NextButton } from "./components/NextButton";
import { Summary } from "./components/Summary";


export const App = () => {
  return (
    <div>
      <CurrentQuestionZustand />
      <CurrentOptions />
      <NextButton />
      <Summary />
    </div>

  );
};
