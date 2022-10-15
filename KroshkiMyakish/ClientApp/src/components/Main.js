import LeftMenu from "./LeftMenu/LeftMenu";
import MainMenu from "./MainMenu/MainMenu";
import rightIcon from "../img/MainMenu/rightIcon.png";
import "./main.css"
const Main = () => {
    return (
        <div>
            <MainMenu/>
            <div className="main">
                <LeftMenu/>
                <img className="left-icon" src={rightIcon} alt="left-icon"/>
            </div>
        </div>

    )
}
export default Main