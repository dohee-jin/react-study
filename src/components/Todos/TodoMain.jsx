import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({todos, onCancel, onFinish}) => {

    return (
        <ul className={styles['todo-list']}>
            {todos.map(todo => <TodoItem
                key={todo.id}
                item={todo}
                onCancel={onCancel}
                onFinish={onFinish}
            />)}
        </ul>
    );
};

export default TodoMain;