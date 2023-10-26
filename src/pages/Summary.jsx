//Summary page which is shown after last answer


import { SummaryResponse } from "../components/SummaryResponse";
import { RestartButton } from "../components/Buttons/RestartButton";

export const Summary = () => {
    //Mounting the components SummaryResponse and RestartButton to be shown after the 'Questions' page.
    return (
        <div className="summary-page">
            <header>
     <h1>QUIZ</h1>
     </header>
            <SummaryResponse />
            <RestartButton />
        </div>
    );
};
