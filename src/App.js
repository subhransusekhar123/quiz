import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Quiz from './Components/Quiz';
import Button from './Components/Button';

function App() {
  const quiz = useSelector((state) => state.quiz.all_Quizs)
  const dispatch = useDispatch()
  console.log(quiz);
  return (
    <>
    <div className="container">
      <Quiz/>
      <Button/>
    </div>
    </>
  );
}

export default App;
