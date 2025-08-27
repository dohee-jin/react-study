import React, {useState} from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({id, todo, onCancel, onFinish}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle, active, finish } = styles;

    // 체크박스 토글
    const [isFinished, setIsFinished] = useState(false);

    // todo 취소 이벤트 핸들러
    const cancelTodoHandler = e => {
        if(e.target.closest('li')) {
            onCancel(id);
        }
    }

    // todo 완료 이벤트 핸들러
    const finishTodoHandler = e => {
        setIsFinished(prev => !prev);
        onFinish(id);
    }

    return (
        <li className={itemStyle} id={id}>
            <div className={`${checkCircle} ${isFinished ? active : ''}`} onClick={finishTodoHandler}>
                <MdDone />
            </div>
            <span className={`${text} ${isFinished ? finish : ''}`}>{todo}</span>
            <div className={remove} onClick={cancelTodoHandler}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;