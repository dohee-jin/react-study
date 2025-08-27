import React from 'react';
import styles from './CourseList.module.css';
import CourseItem from './CourseItem';

const CourseList = ({goals, onCancel}) => {

    const content = goals.map(goal =>
        <CourseItem key={goal.id}
                    id={goal.id}
                    text={goal.text}
                    onCancel = {onCancel}
        />)

    return (
        <ul className={styles['goal-list']}>
            { content }
        </ul>
    );
};

export default CourseList;