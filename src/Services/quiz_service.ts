// import React from 'react'
import {Question_type,Quiz_type} from "./../Types/quiz_type"
async function getQuiz(): Promise<Quiz_type[]>{
    const res=await fetch(("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"))
    const {results}=await res.json();
    const quiz:Quiz_type[]=results.map ((resultObj:Question_type)=>{
        return {
            question:resultObj.question,
            answer:resultObj.correct_answer,
            options:resultObj.incorrect_answers.concat(resultObj.correct_answer),
            correctAns:resultObj.correct_answer
        }
    })
    return quiz
    // console.log(data)
}
export default getQuiz;