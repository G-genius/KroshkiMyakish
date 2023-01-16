import "./Header.css"
import regIcon from "../../img/header/reg.svg"
import logIcon from "../../img/header/log.svg"
import "./Modal.css"
import showPass from "../../img/header/show-pass.svg"
import SubHeader from "./SubHeader/SubHeader";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import Form from "../Form";

const Header = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)
    const menuBtn = document.getElementsByClassName('menu-btn')

    // Когда пользователь нажимает кнопку "зарегистрироваться"
    const OpenReg = () => {
        let modelReg = document.getElementById("regModal")
        modelReg.style.display = "block";
    }

    // Когда пользователь нажимает кнопку "войти"
    const OpenLog = () => {
        let modelLog = document.getElementById("logModal")
        modelLog.style.display = "block";
    }

    // Когда пользователь нажимает кнопку "закрыть"
    const Close = () => {
        let modelReg = document.getElementById("regModal")
        let modelLog = document.getElementById("logModal")
        modelReg.style.display = "none";
        modelLog.style.display = "none";
    }

    // Когда пользователь щелкает в любом месте за пределами модального, закройте его
    window.onclick = function (event) {
        let modelReg = document.getElementById("regModal")
        let modelLog = document.getElementById("logModal")
        if (event.target === modelReg || event.target === modelLog) {
            modelReg.style.display = "none";
            modelLog.style.display = "none";
        }
    }

    const OpenPassword = () => {
        let passInput = document.getElementById("pass-input")
        let passInputRepeat = document.getElementById("pass-input-repeat")
        if (passInput.type === "password") {
            passInput.type = "text"
            passInputRepeat.type = "text"
        } else {
            passInput.type = "password"
            passInputRepeat.type = "password"
        }
    }

    const OpenNotReg = () => {
        let modelReg = document.getElementById("regModal")
        let modelLog = document.getElementById("logModal")
        if (modelReg.style.display === "block") {
            modelReg.style.display = "none"
            modelLog.style.display = "block"
        }
        else {
            modelReg.style.display = "block"
            modelLog.style.display = "none"
        }
    }

    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            store.checkAuth()
        }

    }, [token])






    return (
        <div className="header">
            <header>
                <h5>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `Авторизуйтесь!!!`}</h5>
                <button onClick={() => store.logout()}>Выйти</button>
                <div className="menu-btn">
                    <ul className="menu">
                        <li className="register" onClick={OpenReg}><img src={regIcon} alt={regIcon}/> Регистрация</li>
                        <li className="login" onClick={OpenLog}><img src={logIcon} alt={logIcon}/> Вход</li>
                    </ul>
                </div>
                <div className="modal" id="regModal">
                    <div className="modal-content">
                        <span className="close" onClick={Close}>&times;</span>
                        <div className="field-form">
                            <div>
                                <p className="RegName">Регистрация</p>
                            </div>
                            <div className="field">
                                <p>Ваш email</p>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <p>Введите пароль</p>
                                <div className="pass-field field">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        type="password"
                                        placeholder="password"
                                    />
                                    <img src={showPass} className="open-pass-btn" onClick={OpenPassword}
                                         alt="showPass"/>
                                </div>
                            </div>
                            <div>
                                <p>Повторите пароль</p>
                                <div className="pass-field field">
                                    <input id="pass-input-repeat" type="password"/>
                                    <img src={showPass} className="open-pass-btn" onClick={OpenPassword}
                                         alt="showPass"/>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => store.registration(email, password)}>Регистрация</button>
                            </div>
                            <div>
                                <p className="bottom-btn" onClick={OpenNotReg}>Уже есть аккаунт? Войти</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="logModal">
                    <div className="modal-content">
                        <span className="close" onClick={Close}>&times;</span>
                        <div className="field-form">
                            <div>
                                <p className="RegName">Вход</p>
                            </div>
                            <div className="field">
                                <p>Ваш email</p>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <p>Введите пароль</p>
                                <div className="pass-field field">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        type="password"
                                        placeholder="password"
                                    />
                                </div>

                            </div>
                            <div>
                                <button onClick={() => store.login(email, password)}>Логин</button>
                            </div>
                            <div>
                                <p className="bottom-btn" onClick={OpenNotReg}>Нет аккаунта? Зарегистрироваться</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SubHeader/>
        </div>
    )
}
export default Header