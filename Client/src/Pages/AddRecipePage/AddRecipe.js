import "./AddRecipe.css"
import FileBase64 from 'react-filebase64';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Checkbox} from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import App from "../../App";

const AddRecipe = () => {
    const [quill, setQuill] = useState("")
    const handleQuill = (e) => {
        console.log(e)
        setQuill(e)
    }
    App.modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image']
        ],

    }
    App.formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="add_recipe">
                    <h1>Добавление рецепта</h1>
                    <div className="add_recipe_form">
                        <p>Название рецепта:</p>
                        <div className="add_recipe_item">
                            <input className="big_input" type="text"/>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Краткое описание:</p>
                        <div className="add_recipe_item">
                            <textarea maxLength={100}/>
                            <br/>
                        {/*    <span>*/}
                        {/*    Обязательно напишите 2-3 строки - что это за блюдо, его особенности, вкусовые качества.*/}
                        {/*    <br/>*/}
                        {/*    Этот текст будет показываться в качестве анонса к Вашему рецепту -*/}
                        {/*    и именно по этому тексту люди будут определять, стоит читать Ваш рецепт - или нет.*/}
                        {/*</span>*/}
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Основное фото:</p>
                        <div className="add_recipe_item">
                            <FileBase64/>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Рубрика:</p>
                        <div className="add_recipe_item">
                            <select>
                                <option>--выберите рубрику--</option>
                                <option>Бульоны и супы</option>
                                <option>Горячие блюда</option>
                                <option>Салаты</option>
                                <option>Закуски</option>
                                <option>Выпечка</option>
                                <option>Десерты</option>
                                <option>Соусы</option>
                                <option>Домашние напитки</option>
                            </select>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Время приготовления:</p>
                        <div className="add_recipe_item">
                            <input type="number" className="short_input"/>
                            <span>(минут)</span>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Количество порций:</p>
                        <div className="add_recipe_item">
                            <input type="number" className="short_input"/>
                        </div>
                    </div>
                    <ReactQuill
                        className="quill"
                        placeholder="Напишите пошагово текст рецепта с добавлением фотографий"
                        modules={App.modules}
                        formats={App.formats}
                        onChange={handleQuill}
                        value={quill}>

                    </ReactQuill>
                    <div className="add_recipe_form">
                        <p>Видеорецепт <br/>
                            (необязательно):
                        </p>
                        <div className="add_recipe_item">
                            <input className="big_input" placeholder="https://www.youtube.com/watch?v=BzI9SwOmvKs" type="text"/>
                    {/*        <span>Используйте видео в качестве альтернативы</span>*/}
                    {/*        <span>Если Вы хотите вставить видео с Youtube или Rutube,*/}
                    {/*для этого скопируйте и вставьте ссылку на видео в форму.</span>*/}
                        </div>
                    </div>
                    <div className="button-add-recipe">
                        <Checkbox/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <span> - Я согласен с <a href="">условиями размещения</a></span>
                    </div>
                    <div className="add_recipe_form">
                        <button className="button button-add-recipe" >Опубликовать</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )
}
export default AddRecipe