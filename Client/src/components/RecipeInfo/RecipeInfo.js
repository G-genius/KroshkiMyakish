import dish1 from "../../img/dish1.jpg"
import "./RecipeInfo.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import RecipeService from "../../services/RecipeService";
import ReactQuill from "react-quill";
const RecipeInfo = () => {
    const [recipes, setRecipes] = useState([]);

    //console.log(recipes)
    async function getRecipe() {
        try {
            const recipeId = window.location.href.split("/")[4]
            const response = await RecipeService.getRecipe();
            setRecipes(response.data);
            //console.log(recipeId)
        } catch (e) {
            console.log(e);
        }
    }
    getRecipe()

    return (
        <div className="recipe_info">
            <Header/>
            <div className="container">
                <div className="recipe_info_item">
                    <div className="recipe_category">
                        <p>Название рубрики</p>
                    </div>
                    <div className="recipe_name">
                        <h1>{recipes.name}</h1>
                    </div>
                    <div className="recipe_main_image">
                        <img src={recipes.mainPhoto} alt="dish1" width={200}/>
                    </div>
                    <div className="recipe_time_count">
                        <span>{recipes.time}мин.</span>
                        <span>кол-во порций - {recipes.count}</span>
                    </div>
                    <div className="recipe_short_info">
                        <h2>{recipes.shortDesc}</h2>
                    </div>
                    <div className="recipe_text" dangerouslySetInnerHTML={{__html: recipes.desc}}>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default RecipeInfo