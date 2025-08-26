import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSave }) => {

    // 입력값 단일 상태 관리
    /*const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(null);*/

    //

    const initUserInputState = {
        title: '',
        price: 0,
        date: null
    };

    const [userInput, setUserInput] = useState(initUserInputState);


    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 제목 입력 이벤트
    const titleChangeHandler = e => {
        /*
            리액트는 기존객체에서 프로퍼티 값만을 바꾸면 상태변경을 감지하지 못함
            상태 변화를 감지하기 위해서는 새 객체를 넣어줘야 함
         */
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            title: e.target.value,
        }));
    }

    // 가격 입력 이벤트
    const priceChangeHandler = e => setUserInput(prev => ({
        ...prev,
        price: +e.target.value,
    }));

    // 날짜 입력 이벤트
    const dateChangeHandler = e => setUserInput(prev => ({
        ...prev,
        date: e.target.value,
    }));

    // const $inputElement = document.querySelectorAll('input');

    // form 제출 이벤트
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('form이 제출됨!');
        // const payload = { title, price, date };


        console.log(userInput);

        // 상위컴포넌트(App)이 내려준 onAddExpense 라는 함수를 onAdd 로 내려받음
        onSave({
            ...userInput,
            date: new Date(userInput.date)
        });

        // 입력창 초기화
        /*
          input 태그에다가 값을 입력하면 -> 상태변수에 저장됨  (단방향)
          상태변수의 값을 바꾸면 -> input이 갱신된다?  (X)    (양방향)
         */
        // setTitle('');
        // setPrice(0);
        // setDate(null);

        setUserInput(initUserInputState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'  onInput={titleChangeHandler} value={userInput.title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input
                        type='number'
                        min='100'
                        step='100'
                        onInput={priceChangeHandler}
                        value={userInput.price || ''}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max={getTodayDate()}
                        onInput={dateChangeHandler}
                        value={userInput.date ?? ''} // 1 || '' 데이터가 falsy 이면 오른쪽, 1 ?? '' 데이터가 널이면 오른쪽 것
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
