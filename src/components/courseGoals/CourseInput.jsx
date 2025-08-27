import React, {useState} from 'react';
import styles from './CourseInput.module.css';
import Button from '../ui/Button';

const CourseInput = ({ onSave }) => {

    const {'form-control': formControl, invalid} = styles

    const initGoal = {
        id: '',
        text: '',
    }

    // 목표 input 상태 관리
    const[goal, setGoal] = useState(initGoal);

    // 입력값 오류 여부 상태 관리
    const[isValid, setIsValid] = useState(null);

    // 목표 입력 이벤트
    const goalInputHandler = e => {

        let inputValue = e.target.value;

        // 입력값 검증
        if(inputValue.trim()) {
            setIsValid(true);
        }

        setGoal(() => ({
            id: 'g'+ Math.floor(Math.random() * 100).toString(),
            text: inputValue,
        }))
    }

    // 목표 추가하기 버튼 클릭 이벤트
    const addGoalSubmit = e => {
        e.preventDefault();

        // 입력값 검증
        if(!goal.text.trim()) {
            setIsValid(false);
            return;
        }

        onSave(goal);

        // 입력창 초기화
        setGoal(initGoal);
        setIsValid(true);
    }

    return (
        <form onSubmit={addGoalSubmit}>
            <div className={`${formControl} ${isValid === false ? invalid : ''}`}>
                <label>나의 목표</label>
                <input type='text'
                       onInput = {goalInputHandler}
                       value = {goal.text || ''}
                />
            </div>
            <Button type='submit' >목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;