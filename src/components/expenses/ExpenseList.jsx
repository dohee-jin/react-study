import React from 'react';

import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../ui/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";

const ExpenseList = ({expenses: expenseList}) => {

    console.log(expenseList)

    /*
        ExpenseFilter 에서 선택한 연도 값을
        이 컴포넌트 ExpenseList 로 끌어올려서 콘솔에 출력
     */

    const onFilterChange = (date) => {
        console.log(date);
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter onChangeFilter={onFilterChange}/>
            <ExpenseItem expense={expenseList[0]}/>
            <ExpenseItem expense={expenseList[1]}/>
            <ExpenseItem expense={expenseList[2]}/>
        </Card>
    );
};

export default ExpenseList;