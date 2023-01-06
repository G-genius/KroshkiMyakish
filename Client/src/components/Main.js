import LeftMenu from "./LeftMenu/LeftMenu";
import MainMenu from "./MainMenu/MainMenu";
import rightIcon from "../img/MainMenu/rightIcon.png";
import "./main.css"
import RecipeList from "./MainMenu/RecipeList/RecipeList";
import Form from "./Form";
import React, {useContext, useEffect} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FC} from "react";
const Main: FC = () => {

    const {store} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm/>
            </div>
        );
    }

    return (
        <div className="Main">
            {/*<h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : `Авторизуйтесь!!!`}</h1>*/}
            {/*<button onClick={() => store.logout()}>Выйти</button>*/}
            <div className="main-left">
                <LeftMenu/>
            </div>
            <div className="main-recipe-list">
                <MainMenu/>
                <RecipeList/>
            </div>
            <div>
                <img className="left-icon" src={rightIcon} alt="left-icon"/>
            </div>
        </div>

    )
}
export default observer(Main)