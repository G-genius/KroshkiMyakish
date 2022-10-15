import dish1 from "../../../img/dish1.jpg";
import watch from "../../../img/MainMenu/RecipeList/watch.svg";
import chat from "../../../img/MainMenu/RecipeList/chat.svg";

const ListItem = () => {
    return(
        <div className="list-item">
            <img src={dish1}/>
            <p>Сёмга с картошкой</p>
            <div className="recipe-bottom-list">
                <div className="recipe-bottom">
                    <img src={watch}/>
                    <p>1,5 часа</p>
                </div>
                <div className="recipe-bottom">
                    <img src={chat}/>
                    <p>35</p>
                </div>
            </div>
        </div>
    )
}
export default ListItem