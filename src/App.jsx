import React, {useState} from 'react';
import './App.css';
import TodoTemplate from './components/Todos/TodoTemplate.jsx';

const App = () => {

    const todoList = [
        {
            id: 't1',
            todo: '할 일 어쩌구~~',
            finish: false,
        },
        {
            id: 't2',
            todo: '할 일 어쩌구~~',
            finish: false
        }
    ]

    const [todos, setTodos] = useState(todoList);

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
                todo.finish = !todo.finish;
                return todo;
            } else {
                return todo;
            }
        }))

    }


    return <TodoTemplate onAdd={onAddTodo} todos = {todos} onCancel={onCancelTodo} length={todos.filter(todo => todo.finish !== true).length} onFinish={onFinishTodo}/>
};

export default App;