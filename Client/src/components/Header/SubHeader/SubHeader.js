import logo from "../../../img/header/logo.png"
import "./SubHeader.css"
import arrow from "./../../../img/header/arrow.svg"
import searchIcon from "../../../img/header/searchIcon.svg"
import userIcon from "../../../img/header/user.svg"
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useContext, useReducer, useState} from "react";
import {Context} from "../../../index";

const SubHeader = () => {
    const navigate = useNavigate()
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    const {store} = useContext(Context)

    const OpenMainPage = () => {
        navigate("/")
        window.scrollBy(0, -10000)
    }
    const OpenAccountPage = () => {
        navigate("/account")
        window.scrollBy(0, -10000)
    }
    const OpenRecipeList = () => {
        navigate("/recipes")
        window.scrollBy(0, -10000)
    }

    setTimeout(() => {
        forceUpdate()
        let user = document.getElementById('user-board')
        if (store.isAuth) {
            user.style.display = "flex"
        }
    }, 1)

    const test = () => {
        let selector = document.getElementById("selector")
        let selectedValue = selector.options[selector.selectedIndex].value
        if (selectedValue === "1") {
            navigate("/recipes/soups")
        }
        else if (selectedValue === "2") {
            navigate("/recipes/goryachie_bliuda")
        }
        else if (selectedValue === "3") {
            navigate("/recipes/salad")
        }
        else if (selectedValue === "4") {
            navigate("/recipes/zakuski")
        }
        else if (selectedValue === "5") {
            navigate("/recipes/vypechka")
        }
        else if (selectedValue === "6") {
            navigate("/recipes/dessert")
        }
        else if (selectedValue === "7") {
            navigate("/recipes/sousy")
        }
        else if (selectedValue === "8") {
            navigate("/recipes/napitki")
        }
    }



    return (
        <div className="sub-header">
            {/*<img className="logo" onClick={OpenMainPage} src={logo} alt={logo}/>*/}
            <h1 className="logo" onClick={OpenMainPage}>Food Craft</h1>
            <div className="search">
                <div className="category" >
                    <select id="selector" className="selector" onChange={test} name="Все категории" defaultValue="0">
                        <option disabled={true} value="0">Выберите категорию</option>
                        <option value="1">Бульоны и супы</option>
                        <option value="2">Горячие блюда</option>
                        <option value="3">Салаты</option>
                        <option value="4">Закуски</option>
                        <option value="5">Выпечка</option>
                        <option value="6">Десерты</option>
                        <option value="7">Соусы</option>
                        <option value="8">Напитки</option>
                    </select>
                </div>
                {/*<div className="inputSearch">*/}
                {/*    <input placeholder="Поиск"/>*/}
                {/*</div>*/}
                {/*<div className="search-icon">*/}
                {/*    <img src={searchIcon} alt={searchIcon}/>*/}
                {/*</div>*/}
            </div>

            <div className="user" id="user-board">
                <Link to="/add-recipe" className="add-recipe">Добавить рецепт</Link>
                <img className="user-icon" src={userIcon} alt={userIcon} onClick={OpenAccountPage}/>
            </div>

        </div>
    )
}
export default SubHeader