import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    const onFormChange = (isChange) => {
        isChange ? setContent(buttonComponent) : setContent(buttonComponent);
    }

    const formComponent = <ExpenseForm onSave={onSave} onChange={onFormChange}/>
    const buttonComponent = <button onClick={() => setContent(formComponent)}>새로운 지출 추가하기</button>

    const [content, setContent] = useState(buttonComponent);





    return (
        <div className='new-expense'>
            { content }
        </div>
    );
};

export default NewExpense;