import React, {useState} from 'react';
import './App.css';
import MainHeader from "./components/SideEffect/MainHeader.jsx";
import Login from "./components/SideEffect/Login.jsx";
import Home from "./components/SideEffect/Home.jsx";

const App = () => {

    // 로그인 상태 체크
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <MainHeader />
            <main>
                {isLoggedIn && <Home/>}
                {!isLoggedIn && <Login />}
            </main>
        </>
    );
};

export default App;