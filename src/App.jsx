import React, {useEffect, useState} from 'react';
import './App.css';
import MainHeader from "./components/SideEffect/MainHeader.jsx";
import Login from "./components/SideEffect/Login.jsx";
import Home from "./components/SideEffect/Home.jsx";

const App = () => {

    // 로그인 상태 체크
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    // useState 는 새고로침하면 모든 상태정보가 리셋됨

    // 렌더링 전 토큰 검사 진행
    /*console.log('토근 검사');
    const token = localStorage.getItem('token');
    if(token === '1') {
        setIsLoggedIn(true)
    }*/

    // 사이드 이펙트(서버에서 데이터를 가져오거나 외부 비동기작업) 처리를 위한 훅(리액트 함수)
    useEffect(() => {
        console.log('유즈이펙트가 실행됨')
        const token = localStorage.getItem('token');
        if(token === '1') {
            setIsLoggedIn(true)
        }
    }, []);

    // 입력한 이메일, 패스워드를 끌어올리기 위한 함수
    const handleLogin = (email, password) => {
        // 로그인 검증
        if(email === 'abc@def.com' && password === '12345678') {
            localStorage.setItem('token', 1)
            setIsLoggedIn(true); // 리렌더링 발생
        } else {
            alert('로그인 실패..!..!....!!!!!!')
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false);
    }

    console.log('렌더링 수행')

    return (
        <>
            <MainHeader onLogout={handleLogout}/>
            <main>
                {isLoggedIn && <Home/>}
                {!isLoggedIn && <Login onLogin={handleLogin}/>}
            </main>
        </>
    );
};

export default App;