import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = ({expense}) => {
    /*console.log(props);
    console.log(props.title)*/

    const {title, date, price} = expense;

   //  기존 addEventListener 방식은 X
   /*
    const $btn1 = document.getElementById('btn1');
    $btn1.addEventListener('click', e => {
        alert('click!!!');
    })*/

    // 이벤트 핸들러
    const clickHandler = () => {
        alert('click!!');
    };

    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{price}원</div>
            </div>
            <button id='btn1' onClick = {clickHandler}>버튼1</button>
        </div>
    );
};

export default ExpenseItem;