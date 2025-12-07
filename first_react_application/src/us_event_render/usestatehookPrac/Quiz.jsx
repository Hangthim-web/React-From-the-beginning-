import { useState } from 'react';

const Quiz=()=>
{
    const questions = [
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Osaka"],
    answer: "Tokyo",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Making Line",
      "Hyper Tool Multi Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "How many planets are in the Solar System?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    question: "What gas do plants absorb from the air?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare",
  },
];

const [answers,setAnswers] = useState({})
const [score,setScore] = useState(null)
const handleChange=(qIndex,option)=>{
    setAnswers({...answers,[qIndex]:option})
}

const handleSubmit=()=>
{
    let count =0;
    questions.forEach((q,i)=>{
        if (answers[i]===q.answer) count++;
    });
    setScore(count);
}

return (
    <div>
        {/* <h1>This is the quiz</h1> */}
         <h1>Quiz</h1>
         {questions.map((question,index)=>(
            <div key={index}>
                <h3>{question.question}</h3>
                {question.options.map((option,index_opt)=>(
                    <div key={index_opt}>
                        <label htmlFor="">
                            <input 
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            onChange={()=>handleChange(index,option)}  
                            checked={answers[index] === option}
                              />
                            {option}
                            </label>
                            </div>
                ))}
            </div>
         ))}
         <button onClick={handleSubmit}>Submit</button>
        
      {score !== null && (
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      )}
       <h3>Your Answers:</h3>
    <ul>
      {questions.map((q, i) => (
        <li key={i}>
          <strong>{q.question}</strong><br />
          Your Answer: {answers[i] || "Not answered"}<br />
          Correct Answer: {q.answer}
        </li>
      ))}
    </ul>
    </div>
) 

}
export default Quiz; 