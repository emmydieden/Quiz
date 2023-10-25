import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

export const ToSummaryButton = () => {
  return (
    <div className="button-container">
    <Link to="/summary">
        <button>Finish</button>
    </Link>
    </div>
  )
}