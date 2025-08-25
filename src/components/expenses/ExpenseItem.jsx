import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = ({expense}) => {
    /*console.log(props);
    console.log(props.title)*/

    const {title, date, price} = expense;

    // 상태변수를 사용하는 useState 훅
    /*
        useState 훅의 리턴값은 배열이며
        첫번째 요소는 관리할 상태값의 초기값
        두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수
    */
    // const [itemTitle, setItemTitile] = useState(title);

   //  기존 addEventListener 방식은 X
   /*
    const $btn1 = document.getElementById('btn1');
    $btn1.addEventListener('click', e => {
        alert('click!!!');
    })*/

    // 원화 표기법으로 변환
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);
    // console.log(`변경 후: ${itemTitle}`);

    // 이벤트 핸들러
    /*const clickHandler = () => {
        console.log(`변경 전: ${itemTitle}`);
        // title = '짜장면';
        setItemTitile('짜장면');
        console.log(`변경 후: ${itemTitle}`);
    };*/

    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{formatPrice}원</div>
            </div>
            {/*<button id='btn1' onClick = {clickHandler}>버튼1</button>*/}
        </div>
    );
};

export default ExpenseItem;