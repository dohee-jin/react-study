import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({todos, onCancel, onFinish}) => {

    const todoList = todos.map(todo => <TodoItem
        key={todo.id}
        id={todo.id}
        todo={todo.todo}
        onCancel={onCancel}
        onFinish={onFinish}
    />)

    return (
        <ul className={styles['todo-list']}>
            {todoList}
        </ul>
    );
};

export default TodoMain;