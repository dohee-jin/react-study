import React from 'react';
import Fruit from "./Fruit.jsx"; // 생략 가능

// 함수형 컴포넌트: 최신 방식
function Bye() {

    return (
        <div>
            <a href="https://google.com">구글로 이동</a>
            <Fruit/>
        </div>
    )
}

export default Bye;