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

    return (
        <div>
            <Header/>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
            <div className="container">
                <div className="account_main_page">
                    <div className="account_page">
                        <div className="account_info">
                            <img src={UserLogo} alt="user-logo"/>
                            <div className="user_locate">
                                <h1 className="user_name">{store.user.email}</h1>
                                <span>Страна, город</span>
                            </div>
                        </div>
                        <div className="account-block">
                            <span>Интересы:</span>
                        </div>
                        <div className="account-block">
                            <span>Обо мне:</span>
                        </div>
                        <div className="account-block">
                            <span>Любимые блюда:</span>
                        </div>
                        <div className="account-block">
                            <span>Добавлено рецептов: {}</span>
                        </div>
                    </div>
                    <div className="change_info">
                        <p onClick={OpenEditPage}>Редактировать профиль</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AccountPage