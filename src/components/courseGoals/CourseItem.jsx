import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({id, text, onCancel}) => {

    const {'goal-item': goalItem} = styles;

    const cancelHandler = e => {
        const goalId = e.target.id;
        onCancel(goalId)
    }

    return <li className={`${goalItem}`} id={id} onClick={cancelHandler}>{text}</li>;
};

export default CourseItem;
