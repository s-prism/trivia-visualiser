import { useEffect, useState } from "react";
import {Question} from "../types.tsx"

export default function QuestionsForCategory({category,questions}:{category:string, questions: Question[]}) {
    const relevantQuestions: Question[] = questions.filter(question => decodeURIComponent(question.category) === category)
    return <div>
        Questions about {category}
        {relevantQuestions.map((question, index) => 
            <div style={{fontSize:"1rem", lineHeight:"2rem"}}>
                <div>{(index + 1) + ". " + decodeURIComponent(question.question)}</div>
                <div style={{paddingLeft:"10%", paddingTop:"2%", paddingBottom:"2%"}}>
                    {[question.correct_answer, ... question.incorrect_answers].map(answer => (decodeURIComponent(answer) + " | "))}
                </div>

            </div>)}
    </div>
}

