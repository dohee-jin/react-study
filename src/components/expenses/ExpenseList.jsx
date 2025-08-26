import React, {useState} from 'react';

import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../ui/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseChart from "../chart/ExpenseChart.jsx";

const ExpenseList = ({expenses: expenseList}) => {

    console.log(expenseList)

    /*
        ExpenseFilter 에서 선택한 연도 값을
        이 컴포넌트 ExpenseList 로 끌어올려서 콘솔에 출력
     */

    const[year, setYear] = useState(new Date().getFullYear().toString());

    const onFilterChange = (filteredYear) => {
        console.log(filteredYear);
        setYear(filteredYear);
    }

    // 반복문을 통해 컴포넌트 배열을 리턴하는 함수
    /*
    const foo = () => {

        // for~of, expenseList 의 length 만큼 반목문을 돌림
        /!*const array = [];
        for (const ex of expenseList){
            array.push(<ExpenseItem expense={ex}/>)
        }
        return array;*!/

        return expenseList.map(ex => <ExpenseItem expense={ex}/> )
    }
    */

    // 화면에 조건부로 랜더링할 컴포넌트
    let content;

    // 해당년도 지출항목들을 필터링
    const filteredExpense = expenseList
        .filter(ex => ex.date.getFullYear().toString() === year);

    if(filteredExpense.length > 0) {
        content = filteredExpense
            .map(ex => <ExpenseItem key={Math.random().toString()} expense={ex}/> )
    } else {
        content = <p>아직 해당년도의 지출항목이 없습니다.</p>
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter onChangeFilter={onFilterChange}/>
            <ExpenseChart expenses={filteredExpense}/>
            { content }
        </Card>
    );
};

export default ExpenseList;