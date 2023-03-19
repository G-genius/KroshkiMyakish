import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import {Outlet} from "react-router-dom";

const RecipesPage = () => {
    return (
        <div className="container">
            <Header/>
            <div className="outlet">
                <Outlet/>
            </div>

            <Footer/>
        </div>
    )
}
export default RecipesPage