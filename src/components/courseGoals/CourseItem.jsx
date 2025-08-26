import React from 'react';
import './CourseItem.css';

const CourseItem = ({id, text, onCancel}) => {

    const cancelHandler = e => {
        const goalId = e.target.id;
        onCancel(goalId)
    }

    return <li className='goal-item' id={id} onClick={cancelHandler}>{text}</li>;
};

export default CourseItem;
