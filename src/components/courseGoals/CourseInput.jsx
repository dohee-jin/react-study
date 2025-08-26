import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({ onSave }) => {

    const initGoal = {
        id: '',
        text: '',
    }

    const[goal, setGoal] = useState(initGoal);

    // 목표 입력 이벤트
    const goalInputHandler = e => {
        setGoal(() => ({
            id: 'g'+ Math.floor(Math.random() * 100).toString(),
            text: e.target.value,
        }))
    }

    // 목표 추가하기 버튼 클릭 이벤트
    const addGoalSubmit = e => {
        e.preventDefault();

        onSave(goal);

        // 입력창 초기화
        setGoal(initGoal)
    }

    return (
        <form>
            <div className='form-control'>
                <label>나의 목표</label>
                <input type='text' onInput = {goalInputHandler} value={goal.text || ''}/>
            </div>
            <Button type='submit' onClick={addGoalSubmit}>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;