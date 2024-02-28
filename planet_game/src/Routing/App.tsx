import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import HomeScreen from '@pages/HomeScreen/HomeScreen';
import ReviewScreen from '@pages/ReviewScreen/ReviewScreen';
import QuestionScreen from '@pages/QuestionScreen/QuestionScreen';
import LearnScreen from '@pages/LearnScreen/LearnScreen';

const App = () => {
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
};

export default App;
