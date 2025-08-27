import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAdd}) => {

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
        open,
    } = styles;

    const initTodo = {
        id: '',
        todo: '',
        finish: false,
    }

    // =============== 상태 관리 =============== //
    let isValid = null;
    const[todo, setTodo] = useState(initTodo);
    const[isOpened, setIsOpened] = useState(false);

    // =============== 핸들러 =============== //

    // todo 입력 입력폼 핸들러
    const todoInputHandler = e => {
        const inputTodo = e.target.value;

        if(inputTodo.trim) isValid = true;

        setTodo((prev) => ({
            ...prev,
            id: 't' + Math.floor(Math.random() * 100).toString(),
            todo: inputTodo,
        }))

    }

    // app.js 로 입력한 todo 를 보내는 핸들러
    const addTodoHandler = e => {
        e.preventDefault();

        if(!todo.todo.trim()) {
            isValid = false;
            return
        }

        onAdd(todo)
        setTodo(initTodo)

    }

    // 버튼 오픈 핸들러
    const openBtnHandler = e => {
        setIsOpened(prev => !prev);
    }


    const formContent =
        <div className={wrapper}>
            <form className={insertForm} onSubmit={addTodoHandler}>
                <input
                    type='text'
                    placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    onInput={todoInputHandler}
                    value={todo.todo}
                />
            </form>
        </div>;

    return (
        <>
            {isOpened ? formContent: ''}
            <button
                className={`${insertBtn} ${isOpened ? open : ''}`}
                onClick={openBtnHandler}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;