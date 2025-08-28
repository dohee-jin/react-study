import React, {useRef, useState} from 'react';

const Player = () => {

    // ---> useState를 두 개 쓰지 않아도 돼서 좀 편한것 같음
    const playerNameRef = useRef();
    const initName = 'anonymous';
    const[name, setName] = useState(initName);

    const clickHandler = e => {
        e.preventDefault();
        const $playerNameInput = playerNameRef.current;
        if($playerNameInput.value !== '') {
            setName($playerNameInput.value);
        } else {
            setName(initName)
        }

        $playerNameInput.value='';
    }

    return (
        <section id='player'>
            <h2>Welcome {name}</h2>
            <p>
                <input type='text' ref={playerNameRef}/>
                <button onClick={clickHandler}>Set Name</button>
            </p>
        </section>
    );
};

export default Player;