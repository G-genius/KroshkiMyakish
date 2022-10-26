import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserLogo from "../../img/header/user.svg"
const AccountPage = () => {
    return (
        <div className="account_page">
            <Header/>
                <div className="container">
                    <div className="account_info">
                        <img src={UserLogo} alt="user-logo"/>
                        <h1 className="user_name">Имя Аккаунта</h1>
                    </div>
                    <div className="user_locate">
                        <span>Страна</span>
                        <span>Город</span>
                    </div>
                    <div className="interests">
                        <span>Интересы:</span>
                    </div>
                    <div className="about">
                        <span>Обо мне:</span>
                    </div>
                    <div className="love_food">
                        <span>Любимые блюда:</span>
                    </div>
                    <div className="recipes_count">
                        <span>Добавлено рецептов: {}</span>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default AccountPage