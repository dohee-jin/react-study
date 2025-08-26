import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {
    return (
        <div className='new-expense'>
            <ExpenseForm onSave={onSave} />
        </div>
    );
};

export default NewExpense;