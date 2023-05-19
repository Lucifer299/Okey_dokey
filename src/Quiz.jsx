import { useState } from 'react'
import './App.css'
import React from 'react';
import { Link } from 'react-router-dom';


const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Что такое ООП?',
    variants: [
      'Это описание обьекта',
      'Это способ написания кода, позволяющий создавать объекты с помощью одного объекта',
      'Класс Домашние любимцы с методами «голос» и «есть», от него мы наследуем Кошку и Собаку',
    ],
    correct: 1,
  },
  {
    title: 'ReactDOM',
    variants: [
      'Это дом',
      'Эта дерево которое используется на нижних слоях приложения',
      'Это дерево элементов которое использует виртуальный и обычный DOM для быстрой разработки',
    ],
    correct: 2,
  },
  {
    title: 'Jest',
    variants: [
      'Исполнитель тестов на JavaScript, который позволяет взаимодействовать с DOM через jsdom',
      'Набор вспомогательных функций, позволяющий тестировать React-компоненты не полагаясь на их внутреннюю реализацию',
      'Тестирует поведение специфичное для браузера',
    ],
    correct: 0,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <Link to='/'><button>Вернуться на главную</button></Link>
      
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percent = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const question = questions[step]
  const [correct, setCorrect] = useState(0);
  
  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  } 
 
  return (
    <div className="App">
      {step !== questions.length ? <Game question={question} onClickVariant={onClickVariant} step={step}/> : <Result correct={correct}/>}
      
    </div>
  );
}

export default Quiz;
