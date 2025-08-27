import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({length}) => {

    const { 'day': date, 'tasks-left': left } = styles;
    const today = new Date()
    const year = today.getFullYear().toLocaleString().replace(',', '');
    const month = `${today.getMonth() + 1}`;
    const day = today.getDate().toLocaleString();
    console.log()

    return (
        <header>
            <h1>{year}년 {month}월 {day}일</h1>
            <div className={date}>{today.toLocaleString('ko-kr', {weekday: 'long'})}</div>
            <div className={left}>할 일 {length}개 남음</div>
        </header>
    );
};

export default TodoHeader;