import { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/CategoryList.tsx'
import QuestionsForCategory from './components/QuestionsForCategory.tsx';
import { Question, QuestionsResponse } from './types.tsx';
import QuestionsByDifficulty from './components/QuestionsByDifficulty.tsx';

function App() {
  const [questions,setQuestions] = useState<Question[]>([]);
  const [category, setCategory] = useState<string>("")
  
  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=50&encode=url3986").then((response: Response) => response.json()).then(
          (json: QuestionsResponse) => {
              if (json.response_code === 0) {
                  setQuestions(json.results)
              }
          }
      );
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <CategoryList onClick={setCategory}/>
        <QuestionsForCategory category={category} questions={questions}/>
        <QuestionsByDifficulty questions={questions}/>
      </header>
    </div>
  );
}

export default App;