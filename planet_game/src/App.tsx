import './App.css';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";

import HomeScreen from './HomeScreen';
import ReviewScreen from './ReviewScreen';
import QuestionScreen from './QuestionScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" Component={HomeScreen}></Route>
        <Route path="/Review" exact Component={ReviewScreen}></Route>
        <Route path='/QuestionScreen' exact Component={QuestionScreen}></Route>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
