import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero_Section from "../Pages/Hero_Section/Landing_Page";

const Router_DOM = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero_Section />} />
      </Routes>
    </Router>
  );
};

export default Router_DOM;
