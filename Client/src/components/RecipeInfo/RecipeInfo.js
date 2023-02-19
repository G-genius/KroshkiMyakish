import dish1 from "../../img/dish1.jpg"
import "./RecipeInfo.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import RecipeService from "../../services/RecipeService";

const RecipeInfo = () => {
    const [recipes, setRecipes] = useState([]);
    async function getRecipes() {
        try {
            const response = await RecipeService.getRecipes();
            setRecipes(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    getRecipes()
    let stringToHTML = function (str) {
        let dom = document.createElement('recipe_text');
        dom.innerHTML = str;
        return dom;

    };
    // console.log(stringToHTML(recipes.map(recipe => recipe.desc)));
    return (
        <div className="recipe_info">
            <Header/>
            <div className="container">
                {recipes.map(recipe =>
                <div className="recipe_info_item">
                    <div className="recipe_category">
                        <p>Название рубрики</p>
                    </div>
                    <div className="recipe_name">
                        <h1>{recipe.name}</h1>
                    </div>
                    <div className="recipe_main_image">
                        <img src={recipe.mainPhoto} alt="dish1" width={200}/>
                    </div>
                    <div className="recipe_time_count">
                        <span>{recipe.time}мин.</span>
                        <span>кол-во порций - {recipe.count}</span>
                    </div>
                    <div className="recipe_short_info">
                        <h2>{recipe.shortDesc}</h2>
                    </div>
                    {/*<div className="recipe_ingredients">*/}
                    {/*    <p>Ингридиенты</p>s*/}
                    {/*    <span>*/}
                    {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>*/}
                    {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>*/}
                    {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>*/}
                    {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                    <div className="recipe_text">
                        <h1>{(recipe.desc).innerHTML}</h1>
                    </div>
                </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default RecipeInfo