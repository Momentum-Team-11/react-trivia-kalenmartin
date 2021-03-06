import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import Question from "./components/Question";
import Score from "./components/Score";
import './App.css';

const App = () => {
    const categoriesURL = "https://opentdb.com/api_category.php";
    const questionsURL = "https://opentdb.com/api.php?amount=10&type=boolean&category=";
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [endGame, setEndGame] = useState(false);
    const [home, setHome] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);


//Categories

    useEffect(() => {
    axios
    .get(categoriesURL)
    .then((response) => {
        setCategories(response.data.trivia_categories);
    });
    }, [endGame]);


//Questions

    useEffect(() => {
    axios
    .get(questionsURL + `${selected}`)
    .then((response) => {
        setQuestions(response.data.results);
        setHome(false)
    });
    }, [selected]);

    if (endGame && !home) {
        return (
        <>
        <Score 
        score={score}
        setScore={setScore}
        setHome={setHome}
        home={home}
        setEndGame={setEndGame}
        setCurrentQuestion={setCurrentQuestion}
        />
    <div>
    {/* <button className="homeButt" onClick={() => {
        setEndGame(false);
        setHome(true);
        setQuestions([]); 
        setScore(0)}}>
        </button> */}
    </div>
    </>
    );
}
    if (score === 0 && home || endGame === false) {

    return (
    <main>
        <div className="headerDiv">
        <button className="h1" onClick={() => setHome(true)}><center>It's called Trivi-'ah', not trivi-'uh'</center></button>
        </div>

    <div className="categoryQuestion">
        {/* <ul> */}
        {questions.length > 0 && !home ? (
        <div>
        {questions.map((question, idx) => {
            if (idx === currentQuestion) {
            return (
                <Question
                key={idx}
                question={question}
                setScore={setScore}
                score={score}
                questions={questions}
                setQuestions={setQuestions}
                setCurrentQuestion={setCurrentQuestion}
                i={idx}
                currentQuestion={currentQuestion}
                />
            );
            } else {
                return null
            }
            })}
            {/* <button className="addScore" onClick={() => 
            setEndGame(true)}>
                Add My Score
            </button> */}

        </div>
        ) : (
        categories.map((category) => {
            return (
            <CategorySelect
                key={category.id}
                category={category}
                setSelected={setSelected}
                setHome={setHome}
                />
            );
        })
        )}
        
    </div>
    </main>
    )};
    return null
};

export default App;