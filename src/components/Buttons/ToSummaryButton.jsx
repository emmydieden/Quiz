//Component is mounted in 'Questions.jsx'

import { Link } from "react-router-dom";

import "./Button.css";

// Defines a functional component named ToSummaryButton with link to the "/summary" route
export const ToSummaryButton = () => {
  return (
    <div className="button-container">
    <Link to="/summary">
        <button>Finish</button>
    </Link>
    </div>
  )
}