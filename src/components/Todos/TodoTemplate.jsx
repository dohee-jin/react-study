import React from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const TodoTemplate = ({onAdd, todos, onCancel, length, onFinish}) => {
    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader length={length}/>
            <TodoMain todos={todos} onCancel={onCancel} onFinish={onFinish} length={length} />
            <TodoInput onAdd={onAdd}/>
        </div>
    );
};

export default TodoTemplate;
