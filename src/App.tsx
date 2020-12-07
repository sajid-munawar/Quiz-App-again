import React, { useEffect,useState } from 'react';
import './App.css';
import getQuiz from "./Services/quiz_service";
import {Quiz_type} from "./Types/quiz_type";
import QuizCard from './Components/quiz_card'


function App() {
  let [quiz,setQuiz]=useState<Quiz_type[]>([])
  useEffect(()=>{
    async function getQuestion (){
      const data:Quiz_type[]=await getQuiz();
      setQuiz(data)
      // console.log(data)
    }
    getQuestion()
  },[])
  if(!quiz.length){
    return <h1>Loading...</h1>
  }
  console.log(quiz)
  return (
    <div className="App">
      <QuizCard
      question={quiz[0].question}
      options={quiz[0].options}
      />
    </div>
  );
}

export default App;
