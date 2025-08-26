import React, { useState } from 'react';
import './CheckBoxStyle.css';
const CheckBoxStyle = () => {

    /*
      1. input[checkbox]에 change이벤트가 걸려서
      2. check상태가 바뀔 때마다 상태변수를 논리값으로 업데이트하여
      3. label의 클래스를 유동적으로 변경해야함.
    */
    const[isChecked, setState] = useState(false);

    // 내 코드

    /*
    const[label, setClass] = useState('unchecked');

     const changeHandler = () => {
         if(isChecked) {
             setClass('unchecked');
             setState(false)
         }
         else if(!isChecked) {
             setClass('checked');
             setState(true)
         }
     }*/

    // 선생님 코드
    const changeHandler = e => {
        setState(!isChecked);
    }

    return (
        <div className='checkbox-container'>
            <input
                type='checkbox'
                id='styled-checkbox'
                onChange={changeHandler} // checkbox의 경우 토글 되기 때문에 onChange 이벤트를 걸어줌
            />
            <label className={isChecked ? 'checked' : 'unchecked'} htmlFor='styled-checkbox' >Check me!</label>
        </div>
    );
};

export default CheckBoxStyle;