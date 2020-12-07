import { type } from 'os';
import React,{FC} from 'react';
import {QuestionPropsType} from "./../Types/quiz_type"

const QuizCard:FC<QuestionPropsType>=(({question,options})=>{
    return <div>
        <h1>{question} </h1>
        
        
        </div>

})
export default QuizCard;