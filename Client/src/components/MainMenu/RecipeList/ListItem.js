import dish1 from "../../../img/dish1.jpg";
import watch from "../../../img/MainMenu/RecipeList/watch.svg";
import chat from "../../../img/MainMenu/RecipeList/chat.svg";
import {Link} from "react-router-dom";
import UserService from "../../../services/UserService";
import RecipeService from "../../../services/RecipeService";
import React, {useState} from "react";
import FileBase64 from "react-filebase64";

const ListItem = () => {
    const [recipes, setRecipes] = useState([]);
    const OpenRecipe = () => {
        window.scrollBy({
            top: -10000,
            behavior: 'smooth'
        });
    }

    async function getRecipes() {
        try {
            const response = await RecipeService.getRecipes();
            setRecipes(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    getRecipes()
    return (
        <div className="list-item">
            {recipes.map(recipe =>
                <div className="recipe-item">
                    <Link to={"/recipe/"+recipe._id} className="link" onClick={OpenRecipe}>
                        <img src={recipe.mainPhoto} alt="dish1"/>
                        <p>{recipe.name}</p>
                        <div className="recipe-bottom-list">
                            <div className="recipe-bottom">
                                <img src={watch} alt="dish2"/>
                                <p>{recipe.time}</p>
                            </div>
                            <div className="recipe-bottom">
                                <img src={chat} alt="dish3"/>
                                <p>35</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

        </div>
    )
}
export default ListItem