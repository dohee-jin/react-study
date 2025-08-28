import React, {useState} from 'react';

const TimerChallenge = ({title, targetTime}) => {

    // 타이머가 시작됐는지를 확인하는 상태값
    const[timerStared, setTimerStarted] = useState(false);

    // 타이머가 만료되었는지 확인하는 상태갑
    const[timerExpired, setTimerExpired] = useState(false);

    const handleStart = e => {
        setTimerStarted(true);

        // 실제 정해진 시간만큼 타이머를 가동
        setTimeout(() => {
            console.log(targetTime + 's 타이머 만료!');
            setTimerExpired(true);
        }, targetTime * 1000)
    }

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>{timerStared ? 'stop' : 'start'} Challenge</button>
            </p>
            <p>
                {timerStared ? 'Time is running....' : 'Time inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;