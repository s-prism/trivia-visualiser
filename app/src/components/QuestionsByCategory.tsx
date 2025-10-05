import { PieChart, Pie, PieLabelRenderProps } from "recharts";
import { Question } from "../types";

export default function QuestionsByCategory({questions}:{questions:Question[]}) {
    let counts: Map<string,number> = new Map();
    for (let question of questions) {
        let current_count = counts.get(question.category)
        if (current_count) {
            counts.set(question.category, current_count + 1)
        }
        else {
            counts.set(question.category, 1)
        }
    }
    const data: {key: string, value: number | undefined}[] = Array.from(counts.keys())
        .map(category => {
            let val = {key: category, value: counts.get(category)};
            return val;
        })
    console.log(data)

    let renderLabel = function(props: PieLabelRenderProps) {
        return props.key ? decodeURIComponent(props.key.toString()) : "";
    }

    return <div>
            <div>By Category</div>
            <PieChart width={500} height={500}>
                <Pie data={data} label={renderLabel} dataKey="value" />
            </PieChart>
        </div>
}