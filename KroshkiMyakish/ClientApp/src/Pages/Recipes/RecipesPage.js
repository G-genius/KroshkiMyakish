import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Link, Outlet} from "react-router-dom";
import LeftMenu from "../../components/LeftMenu/LeftMenu";

const RecipesPage = () => {
    return (
        <div>
            <Header/>
            <LeftMenu/>
            <Footer/>
        </div>
    )
}
export default RecipesPage