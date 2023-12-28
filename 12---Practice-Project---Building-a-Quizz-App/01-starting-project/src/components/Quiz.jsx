import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((previousUserAnswers) => {
            return [...previousUserAnswers, answer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (isQuizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz completed !</h2>
            </div>
        )
    }

    const shuffledAnsers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnsers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    key={activeQuestionIndex}
                    timeout={10000} 
                    onTimeout={handleSkipAnswer}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={handleSkipAnswer}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>            
            </div>
        </div>
    )
}