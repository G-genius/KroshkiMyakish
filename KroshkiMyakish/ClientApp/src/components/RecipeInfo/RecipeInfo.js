import dish1 from "../../img/dish1.jpg"
import "./RecipeInfo.css"
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader/SubHeader";
import Footer from "../Footer/Footer";

const RecipeInfo = () => {
    return (
        <div className="recipe_info">
            <Header/>
            <SubHeader/>
            <div className="container">
                <div className="recipe_info_item">
                    <div className="recipe_category">
                        <p>Название рубрики</p>
                    </div>
                    <div className="recipe_name">
                        <h1>Название</h1>
                    </div>
                    <div className="recipe_main_image">
                        <img src={dish1} alt="dish1" width={200}/>
                    </div>
                    <div className="recipe_time_count">
                        <span>Время</span>
                        <span>Кол-во порций</span>
                    </div>
                    <div className="recipe_short_info">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam commodi consequatur, debitis dolorem eveniet fugiat illo inventore iusto laborum natus nisi nulla, numquam odio praesentium quasi quia repellendus suscipit!</h2>
                    </div>
                    <div className="recipe_ingredients">
                        <p>Ингридиенты</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, unde.<br/>
                        </span>
                    </div>
                    <div className="recipe_text">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae dicta dolor dolorum earum eligendi esse exercitationem facere impedit ipsum magni necessitatibus nisi numquam omnis quam quasi, quis quisquam saepe, sapiente, unde ut vel voluptatum. Assumenda consequuntur distinctio dolores facere fuga minus non optio perspiciatis praesentium quia quidem quo repellat saepe sapiente tempora tenetur vel veritatis vero, voluptate voluptates! Asperiores earum illum ipsa iusto laboriosam nulla repellendus, unde? Architecto cupiditate dignissimos, eos eveniet fuga hic id necessitatibus nostrum nulla, odio odit sed velit! Aliquid consequatur cumque cupiditate deserunt, dolorem ea fugiat illo ipsam, iure nihil officia sit sunt velit voluptatum.</h3>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default RecipeInfo