// import React from "react";
// import { Categories } from "./components/Categories";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Question } from "./components/Question";
// import he from "he";

// const Trivia = () => {

//     const [categories, setCategories] = useState([]);
//     const [question, setQuestion] = useState(null);
//     //
//     const [score, setScore] = useState(0);
//     // fetch call to the category api, happens only once when the page loads
//     useEffect(() => {
//         axios.get("https://opentdb.com/api_category.php").then((response) => {
//             setCategories(response.data.trivia_categories);
//         });
//     }, []);
//     // set up a helper function to call the api to be able to pass this helper function to child components later
//     // passed and id to the getQuestion function as a parameter for our users to click on a category and questions to be populated from the that category only
//     const getQuestion = (id) => {
//         console.log("making api call");
//         axios
//             .get(`https://opentdb.com/api.php?amount=1&category=${id}`)
//             .then((response) => {
//                 const rawQuestion = response.data.results[0];
//                 const newQuestion = {
//                     ...rawQuestion,
//                     question: he.decode(rawQuestion.question),
//                     correct_answer: he.decode(rawQuestion.correct_answer),
//                     incorrect_answers: rawQuestion.incorrect_answers.map(
//                         (answer) => {
//                             return he.decode(answer);
//                         }
//                     ),
//                 };
//                 console.log(rawQuestion);
//                 setQuestion(newQuestion);
//             });
//     };
//     return (
//         <div>
//             <div className="App">
//                 <header className="App-header">
//                     <h1>Trivia Night</h1>
//                 </header>
//             </div>
//             <div className="directions">
//                 {question ? (
//                     <h3>Directions for question</h3>
//                 ) : (
//                     <h3>
//                         Trivia
//                     </h3>
//                 )}
//             </div>
//             <div>
//                 {/* Ternary Operator to handle the question view. This switches between the question and the category view. If the question has data then it will change the view to the question view and list out the answers. If not this will continue to show the category list ul... */}
//                 {question ? (
//                     <Question
//                         question={question.question}
//                         correctAnswer={question.correct_answer}
//                         incorrectAnswers={question.incorrect_answers}
//                         incrementScore={() => {
//                             setScore(score + 1);
//                         }}
//                         decrementScore={() => {
//                             setScore(score - 1);
//                         }}
//                     />
//                 ) : (
//                     <ul className="category_list">
//                         {categories.map((category, index) => (
//                             <Categories
//                                 name={category.name}
//                                 key={index}
//                                 onClick={() => {
//                                     // made the getQuestion to a helper function so we could call it once someone clicks a category
//                                     getQuestion(category.id);
//                                 }}
//                             />
//                         ))}
//                     </ul>
//                 )}
//                 {/* added a button for the user to go back to the home page after a question was rendered. To do this we had to change the state to null. This conditional rendering below will only appear if a question is present */}
//                 <div className="home_container">
//                     {question && (
//                         <button
//                             className="home"
//                             onClick={() => setQuestion(null)}
//                         >
//                             Home
//                         </button>
//                     )}
//                 </div>
//             </div>
//             <div className="score">Score: {score}</div>
//         </div>
//     );
// };

// export { Trivia }











// // Game
// // import { useState } from 'react';
// // import React from 'react';
// // import { Question } from './Question';
// // import { Quiz } from './Quiz'


// // const Trivia = () => {
// //     const [ question, setQuestion ] = useState([])

// //     return (
// //         <>
// //         { question.length === 0 ?
// //         <Quiz question={question} setQuestion={setQuestion} /> :
// //         <Question question={question} setQuestion={setQuestion} />}
// //         </>
// //     )
// // }

// // export { Trivia }