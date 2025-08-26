import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {

    // console.log(props)
    const {date} = props;
    // console.log(`date: `, date)

    const month = date?.toLocaleString('en-US', {month: 'long'}).slice(0, 3);
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{date?.getFullYear()}</div>
            <div className='expense-date__day'>{date?.getDate()}</div>
        </div>
    );
};

export default ExpenseDate;