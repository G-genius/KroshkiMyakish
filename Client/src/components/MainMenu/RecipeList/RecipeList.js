import "./RecipeList.css"
import ListItem from "./ListItem";
const  RecipeList = () => {
    return (
        <div className="recipeList">
            <div className="recipe-list" id="recipe-list">
                <ListItem/>
            </div>
        </div>

    )
}
export default RecipeList