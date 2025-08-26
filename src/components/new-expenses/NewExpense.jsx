import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    // 내 코드
    /*
    const onFormChange = (isChange) => {
        isChange ? setContent(buttonComponent) : setContent(buttonComponent);
    }

    const formComponent = <ExpenseForm onSave={onSave} onChange={onFormChange}/>
    const buttonComponent = <button onClick={() => setContent(formComponent)}>새로운 지출 추가하기</button>

    const [content, setContent] = useState(buttonComponent);
    */

    // 선생님 코드
    // 화면상태를 제어하기 위한 논리상태 변수
    const[toggle, setToggle] = useState(false)

    const formComponent = <ExpenseForm onSave={onSave} onCancel={() => setToggle(false)}/>
    const buttonComponent = <button onClick={() => setToggle(true)}>새로운 지출 추가하기</button>



    return (
        <div className='new-expense'>
            { toggle ? formComponent : buttonComponent }
        </div>
    );
};

export default NewExpense;