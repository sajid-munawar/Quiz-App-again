import React, { useEffect,useState } from 'react';
import './App.css';
import getQuiz from "./Services/quiz_service";
import {Quiz_type} from "./Types/quiz_type";
import QuizCard from './Components/quiz_card'


function App() {
  let [quiz,setQuiz]=useState<Quiz_type[]>([])
  let [currentQuiz,setCurrentQuiz]=useState(0)


  useEffect(()=>{
    async function getQuestion (){
      const data:Quiz_type[]=await getQuiz();
      setQuiz(data)
      // console.log(data)
    }
    getQuestion()
  },[])
  const handleSubmit =((e:React.FormEvent<EventTarget>)=>{
    e.preventDefault();
    setCurrentQuiz(++currentQuiz)

  })


  if(!quiz.length){
    return <h1>Loading...</h1>
  }
  console.log(quiz)
  return (
    <div className="App">
      <QuizCard
      question={quiz[currentQuiz].question}
      options={quiz[currentQuiz].options}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
