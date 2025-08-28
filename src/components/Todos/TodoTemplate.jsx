import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import {TODOS} from "./dummy-data/DUMMY_TODOS.js";


const TodoTemplate = () => {


    const [todos, setTodos] = useState(TODOS);

    const onAddTodo = (item) => {
        // console.log(item)
        setTodos(prev => [...prev, item])
    }

    const onCancelTodo = (item) => {
        console.log(`삭제할 todo:`, item);
        setTodos(prev => prev.filter(todo => todo.id !== item));
    }

    const onFinishTodo = (id) => {
        // console.log(`토글된 todo: `, id);
        // const findTodo = todoList.filter(todo => todo.id === id);
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.isFinish = !todo.isFinish;
                return todo;
            } else {
                return todo;
            }
        }))

    }

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader length={todos.filter(todo => todo.isFinish !== true).length}/>
            <TodoMain todos={todos} onCancel={onCancelTodo} onFinish={onFinishTodo} />
            <TodoInput onAdd={onAddTodo}/>
        </div>
    );
};


export default TodoTemplate;
