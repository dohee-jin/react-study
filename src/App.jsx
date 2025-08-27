import React, {useState} from "react";
import CourseInput from "./components/courseGoals/CourseInput.jsx";
import CourseList from "./components/courseGoals/CourseList.jsx";
import './App.css';

/*
    jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

    - 규칙 :
    1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className 으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

*/

const App = ()  => {

    // 목표데이터들의 묶음배열
    const [goals, setGoals] = useState([
        {
            id: 'g1',
            text: '테스트 데이터1',
        },
        {
            id: 'g2',
            text: '테스트 데이터2',
        },
    ]);

    const onAddNewGoal = (goal) => {
        console.log(goal);
        setGoals(prev => [...prev, goal])
    }

    const onCancelGoal = (id) => {
        setGoals((prev) => prev.filter(goal => goal.id !== id))
    }

    return (
        <>
            <div>
                <section id='goal-form'>
                    <CourseInput onSave={onAddNewGoal} />
                </section>
                <section id='goals'>
                    <CourseList goals = {goals} onCancel={onCancelGoal}/>
                </section>
            </div>
        </>
    )
}

export default App


