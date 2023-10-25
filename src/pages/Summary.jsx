//Summary page which is shown after last answer

import React from "react";

import { SummaryResponse } from "../components/SummaryResponse";
import { RestartButton } from "../components/Buttons/RestartButton";

export const Summary = () => {
    //Mounting the components SummaryResponse and RestartButton to be shown after the 'Questions' page.
    return (
        <>
            <SummaryResponse />
            <RestartButton />
        </>
    );
};
