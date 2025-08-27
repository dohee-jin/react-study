import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({goals, onCancel}) => {

    const content = goals.map(goal =>
        <CourseItem key={goal.id}
                    id={goal.id}
                    text={goal.text}
                    onCancel = {onCancel}
        />)

    return (
        <ul className='goal-list'>
            { content }
        </ul>
    );
};

export default CourseList;