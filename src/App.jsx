import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes"

export const App = () => {
  return (
    <>
     <BrowserRouter>
     <h2>QUIZ</h2>
     <Routes>
      {routes}
     </Routes>
     </BrowserRouter>
    </>
  );
};
