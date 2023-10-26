// Entry point. Basic structure for the React application. Handling and defines the 'Routes' component. Enables routing.

import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
     <BrowserRouter>
     <div className="app-content-wrapper">
     <Routes>
      {routes}
     </Routes>
     </div>
     </BrowserRouter>
    </>
  );
};
