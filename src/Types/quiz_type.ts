import { type } from "os";

export type Question_type = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type Quiz_type = {
    question:string
    answer:string
    options:string[]
}
export type QuestionPropsType = {
    question:string
    options:string[]
    callback:(e:React.FormEvent<EventTarget>)=>void
}