import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "../Pages/HomeScreen/HomeScreen";
import ReviewScreen from "../Pages/ReviewScreen/ReviewScreen";
import QuestionScreen from "../Pages/QuestionScreen/QuestionScreen";
import LearnScreen from "../Pages/LearnScreen/LearnScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomeScreen}></Route>
          <Route path="/Review" Component={ReviewScreen}></Route>
          <Route path="/Question" Component={QuestionScreen}></Route>
          <Route path="/Learn" Component={LearnScreen}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
