import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({item, onCancel, onFinish}) => {

    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle, active, finish } = styles;
    const { id, isFinish, todo } = item;


    // todo 취소 이벤트 핸들러
    const cancelTodoHandler = e => {
        if(e.target.closest('li')) {
            onCancel(id);
        }
    }


    return (
        <li className={itemStyle} id={id}>
            <div className={`${checkCircle} ${isFinish ? active : ''}`} onClick={() => onFinish(id)}>
                { isFinish && <MdDone /> }
            </div>
            <span className={`${text} ${isFinish ? finish : ''}`}>{todo}</span>
            <div className={remove} onClick={cancelTodoHandler}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;