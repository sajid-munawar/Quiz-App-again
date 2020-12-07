import React, { FC } from 'react';
import { QuestionPropsType } from "./../Types/quiz_type"

const QuizCard: FC<QuestionPropsType> = (({ question, options,callback }) => {
    return <div>
        <h1>{question} </h1>
        <form>

            {options.map((opt: string, ind: number) => {
                return <div  key={ind}>
                    <label>
                         <input
                        type="radio"
                        name="opt"
                        value={opt}
                    /> {opt}
                    </label>
                </div>
            })}
            <input type="submit" onClick={callback}/>
        </form>

    </div>

})
export default QuizCard;