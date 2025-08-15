import { useState } from 'react';
import styles from "./Quiz.module.css"

const questions = [
    {
        title: 'Сколько будет 1+1?',
        variants: ['Это 2', 'Это 3', 'Это 4'],
        correct: 0,
    },
    {
        title: 'Сколько будет 5*5?',
        variants: ['Будет 5', 'Будет 25', 'Будет 10'],
        correct: 1,
    },
    {
        title: 'Сколько будет корень из 121?',
        variants: ['Это будет 1', 'Это будет 121', 'Это будет 11'],
        correct: 2,
    },
];

const Result = ({ correct }) => {
    return (
        <div className={styles.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа(-ов) из {questions.length}</h2>
            <a href='/'>Попробовать снова</a>
        </div>
    );
}

const Game = ({ question, step, checkAnswer }) => {
    const percent = Math.floor(step / questions.length * 100);

    return (
        <div>
            <div className={styles.progress}>
                <div style={{ width: `${percent}%` }} className={styles.progressInner}></div>
            </div>
            <p>Вопрос {step + 1}</p>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, index) => {
                    return <li onClick={() => checkAnswer(index)} key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export const Quiz = () => {
    const [step, setStep] = useState(0);
    const question = questions[step];
    const [correct, setCorrect] = useState(0);

    const checkAnswer = (index) => {
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
        setStep(step + 1);
    }

    return (
        <section className={styles.AppQuiz}>
            <div className="container">
                <div className={styles.wrapper}>
                    {step !== questions.length ? <Game question={question} step={step} checkAnswer={checkAnswer} /> : <Result correct={correct} />}
                </div>
            </div>
        </section>
    );
};
