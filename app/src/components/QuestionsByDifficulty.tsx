import { PieChart, Pie } from "recharts";
import { Question } from "../types";

export default function QuestionsByDifficulty({questions}:{questions:Question[]}) {
    let counts: Map<string,number> = new Map();
    for (let question of questions) {
        let current_count = counts.get(question.difficulty)
        if (current_count) {
            counts.set(question.difficulty, current_count + 1)
        }
        else {
            counts.set(question.difficulty, 1)
        }
    }
    const data: {key: string, value: number | undefined}[] = Array.from(counts.keys())
        .map(difficulty => {
            let val = {key: difficulty, value: counts.get(difficulty)};
            return val;
        })
    console.log(data)

    return <div>
            <PieChart width={500} height={500}>
                <Pie data={data} dataKey="value"/>
            </PieChart>
        </div>
}