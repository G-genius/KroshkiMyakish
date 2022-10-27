import "./LeftMenu.css"
import React from "react";
import RecipeList from "../MainMenu/RecipeList/RecipeList";
import {Link} from "react-router-dom";
const LeftMenu = () => {
    return (
        <div className="left-menu">
            <div className="list-menu">
                <p className="main-name">Рецепты</p>
                <Link className="recipe_list_item" to="/recipes/new-recipes">Новые рецепты</Link>
                <Link className="recipe_list_item" to="/recipes/soups">Бульоны и супы</Link>
                <Link className="recipe_list_item" to="/recipes/goryachie_bliuda">Горячие блюда</Link>
                <Link className="recipe_list_item" to="/recipes/salad">Салаты</Link>
                <Link className="recipe_list_item" to="/recipes/zakuski">Закуски</Link>
                <Link className="recipe_list_item" to="/recipes/vypechka">Выпечка</Link>
                <Link className="recipe_list_item" to="/recipes/dessert">Десерты</Link>
                <Link className="recipe_list_item" to="/recipes/sousy">Соусы</Link>
                <Link className="recipe_list_item" to="/recipes/napitki">Домашние напитки</Link>
            </div>
            <RecipeList/>

            <div>

            </div>

        </div>
    )
}
export default LeftMenu