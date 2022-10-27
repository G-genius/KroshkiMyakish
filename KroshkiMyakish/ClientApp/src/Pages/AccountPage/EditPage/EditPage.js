import "./EditPage.css"
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import FileBase64 from 'react-filebase64';
const EditPage = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="edit_page">
                    <h1>Редактирования профиля</h1>
                    <div className="account-block">
                        <span>Фотография:</span>
                        <FileBase64/>
                    </div>
                    <div className="account-block">
                        <span>Страна:</span>
                        <input type="text"/>
                    </div>
                    <div className="account-block">
                        <span>Город:</span>
                        <input type="text"/>
                    </div>
                    <div className="account-block">
                        <span>Интересы:</span>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                    </div>
                    <div className="account-block">
                        <span>Обо мне:</span>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="account-block">
                        <span>Любимые блюда:</span>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default EditPage