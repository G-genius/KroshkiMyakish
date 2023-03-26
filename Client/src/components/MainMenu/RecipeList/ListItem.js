import dish1 from "../../../img/dish1.jpg";
import watch from "../../../img/MainMenu/RecipeList/watch.svg";
import chat from "../../../img/MainMenu/RecipeList/chat.svg";
import {Link} from "react-router-dom";
import UserService from "../../../services/UserService";
import RecipeService from "../../../services/RecipeService";
import React, {useState} from "react";

const ListItem = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [SearchTerms, setSearchTerms] = useState("")
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
            setIsLoading(true)
        } catch (e) {
            console.log(e);
        }
    }

    setTimeout(() => {
        if (isLoading) {
            const loading = document.getElementById("loader")
            loading.style.display = "none"
        }
        getRecipes()
    }, 2)

    return (
        <div>
            <div className="loader" id="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
            <div className="list-item">
                {recipes.map(recipe =>
                    <div className="recipe-item" key={recipe._id}>
                        <Link to={"/recipe/" + recipe._id} className="link" onClick={OpenRecipe}>
                            <img src={recipe.mainPhoto} alt="dish1"/>
                            <p>{recipe.name}</p>
                            <div className="recipe-bottom-list">
                                <div className="recipe-bottom">
                                    <img src={watch} alt="dish2"/>
                                    <p>{recipe.time} мин.</p>
                                </div>
                                {/*<div className="recipe-bottom">*/}
                                {/*    <img src={chat} alt="dish3"/>*/}
                                {/*    <p>35</p>*/}
                                {/*</div>*/}
                            </div>
                        </Link>
                    </div>
                )}

            </div>
        </div>
    )
}
export default ListItem