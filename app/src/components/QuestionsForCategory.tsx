import { useEffect, useState } from "react";
import {Question} from "../types.tsx"

export default function QuestionsForCategory({category,questions}:{category:string, questions: Question[]}) {
    const relevantQuestions: string[] = questions.filter(question => decodeURI(question.category) === category).map(question => question.question)
    console.log(relevantQuestions.map(question => question));
    return <div>
        {relevantQuestions.map(question => <div>{decodeURIComponent(question)}</div>)}
    </div>
}

