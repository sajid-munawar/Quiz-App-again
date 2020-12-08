import React, { FC, useState } from 'react';
import { QuestionPropsType } from "./../Types/quiz_type"

const QuizCard: FC<QuestionPropsType> = (({ question, options,callback }) => {
    let [selected,setSelected]=useState("")
        const userselected=((ev:any)=>{
            setSelected(ev.target.value)

        })


   return <div>
        <h1>{question} </h1>
        <form onSubmit={(ev:React.FormEvent<EventTarget>)=>callback(ev,selected)}>

            {options.map((opt: string, ind: number) => {
                return <div  key={ind}>
                <select>
                         <option
                        // type="radio"
                        // name="opt"
                        value={opt}
                        // required
                        onChange={userselected}
                        // checked={opt===selected}
                    > {opt} 
            </select>
                </div>
            })}
            <input type="submit"/>
        </form>

    </div>

})
export default QuizCard;