import './App.css';
import CentredScreen from './Components/CentredScreen';
import NavBar from './Components/NavBar';
import QuestionText from './Components/QuestionText';
import ReviewDrop from './Components/ReviewDrop';
import CustomButton from './Components/CustomButton';
import HomeScreen from './HomeScreen';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import ReviewScreen from './ReviewScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" exact Component={HomeScreen}></Route>
        <Route path="/Review" exact Component={ReviewScreen}></Route>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
