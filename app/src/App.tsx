import { useState, useEffect } from 'react';
import './App.css';
import CategoryList from './components/CategoryList.tsx'
import QuestionsForCategory from './components/QuestionsForCategory.tsx';
import { Question, QuestionsResponse } from './types.tsx';
import QuestionsByDifficulty from './components/QuestionsByDifficulty.tsx';
import QuestionsByCategory from './components/QuestionsByCategory.tsx';

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
        <div className="grid grid-cols-2">
          <QuestionsByDifficulty questions={questions}/>
          <QuestionsByCategory questions={questions}/>
        </div>
      </header>
    </div>
  );
}

export default App;