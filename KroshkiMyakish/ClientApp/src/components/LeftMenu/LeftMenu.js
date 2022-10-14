import "./LeftMenu.css"
import React from "react";
import RecipeList from "../MainMenu/RecipeList/RecipeList";
const LeftMenu = () => {
    return (
        <div className="left-menu">
            <div className="list-menu">
                <p className="main-name">Рецепты</p>
                <p>Новые рецепты</p>
                <p>Бульоны и супы</p>
                <p>Горячие блюда</p>
                <p>Салаты</p>
                <p>Закуски</p>
                <p>Выпечка</p>
                <p>Десерты</p>
                <p>Соусы</p>
                <p>Домашние напитки</p>
            </div>
            <RecipeList/>

            <div>

            </div>

        </div>
    )
}
export default LeftMenu