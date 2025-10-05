export interface QuestionsResponse {
    response_code: number
    results: Question[]
}
export interface Question {
    category: string
    correct_answer: string
    category: string
    incorrect_answers: string[]
    question: string
    type: string
}