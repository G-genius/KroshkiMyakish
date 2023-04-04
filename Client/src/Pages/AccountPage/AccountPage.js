import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserLogo from "../../img/header/user.svg"
import "./AccountPage.css"
import {useNavigate} from "react-router-dom";
import UserService from "../../services/UserService";
import React, {useContext, useState} from "react";
import {Context} from "../../index";

const AccountPage = () => {
    const [users, setUsers] = useState([]);
    const {store} = useContext(Context)
    const navigate = useNavigate()
    const UserLogo = require("../../img/header/user.svg")
    const OpenEditPage = () => {
        navigate("/account/edit")
        window.scrollBy(0, -10000)
    }

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function logout() {
        store.logout()
        navigate("/")
        window.location.reload()
    }

    return (
        <div>
            <Header/>
            
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
            <div className="container">
                <div className="account_main_page">
                    <div className="account_page">
                        <div className="account_info">
                            <img src={store.user.photo} alt={UserLogo}/>
                            <div className="user_locate">
                                <h1 className="user_name">{store.user.email}</h1>
                                <span>{store.user.name}</span>
                                <br/>
                                <span>{store.user.city}</span>
                            </div>
                        </div>
                        <div className="account-block">
                            <span>Обо мне: {store.user.about}</span>
                        </div>
                        {/*<div className="account-block">*/}
                        {/*    <span>Добавлено рецептов: {}</span>*/}
                        {/*</div>*/}

                    </div>
                    {/*<div className="change_info">*/}
                    {/*    <p onClick={OpenEditPage}>Редактировать профиль</p>*/}
                    {/*</div>*/}


                </div>
                <div className="logout">
                    <button onClick={logout}>Выйти</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AccountPage