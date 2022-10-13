import "./LeftMenu.css"
import React from "react";
const LeftMenu = () => {
    return (
        <div className="left-menu">
            <p className="main-name">Рецепты</p>
            <div className="list-menu">
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
        </div>
    )
}
export default LeftMenu