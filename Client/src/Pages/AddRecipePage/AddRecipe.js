import "./AddRecipe.css"
import FileBase64 from 'react-filebase64';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Checkbox} from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useContext, useEffect, useState} from "react";
import App from "../../App";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

const AddRecipe = () => {
    const navigate = useNavigate()
    const {store} = useContext(Context)
    const [quill, setQuill] = useState("")
    const [name, setName] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [mainPhoto, setMainPhoto] = useState('')
    const [category, setCategory] = useState('')
    const [time, setTime] = useState(0)
    const [count, setCount] = useState(0)
    const [author, setAuthor] = useState('')
    const [desc, setDesc] = useState('')
    const [video, setVideo] = useState('')
    const handleQuill = (e) => {

        setDesc(e)
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

    const addRecipe = () => {
        setAuthor(store.user.email)
        store.addRecipe(name, shortDesc, mainPhoto, category, time, desc, video, count, author)
        navigate(`/recipe/${store.recipe.id}`)
    }
    const updateMainPhoto = async (base64) => {
        setMainPhoto(base64[0].base64)
    }
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="add_recipe">
                    <h1>Добавление рецепта</h1>
                    <div className="add_recipe_form">
                        <p>Название рецепта:</p>
                        <div className="add_recipe_item">
                            <input className="big_input"
                                   type="text"
                                   value={name}
                                   onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Краткое описание:</p>
                        <div className="add_recipe_item">
                            <textarea
                                maxLength={200}
                                value={shortDesc}
                                onChange={e => setShortDesc(e.target.value)}
                            />
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
                            <FileBase64
                                multiple={ true }
                                onDone={ updateMainPhoto } />
                            {/*<input*/}
                            {/*    value={mainPhoto}*/}
                            {/*    onChange={e => setMainPhoto(e.target.value)}*/}
                            {/*/>*/}
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Рубрика:</p>
                        <div className="add_recipe_item">
                            <select onChange={e => setCategory(e.target.value)}>
                                <option>--выберите рубрику--</option>
                                <option value="Бульоны и супы">Бульоны и супы</option>
                                <option value="Горячие блюда">Горячие блюда</option>
                                <option value="Салаты">Салаты</option>
                                <option value="Закуски">Закуски</option>
                                <option value="Выпечка">Выпечка</option>
                                <option value="Десерты">Десерты</option>
                                <option value="Соусы">Соусы</option>
                                <option value="Домашние напитки">Домашние напитки</option>
                            </select>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Время приготовления:</p>
                        <div className="add_recipe_item">
                            <input
                                type="number"
                                className="short_input"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            />
                            <span>(минут)</span>
                        </div>
                    </div>
                    <div className="add_recipe_form">
                        <p>Количество порций:</p>
                        <div className="add_recipe_item">
                            <input
                                type="number"
                                className="short_input"
                                value={count}
                                onChange={e => setCount(e.target.value)}
                            />
                        </div>
                    </div>
                    <ReactQuill
                        className="quill"
                        placeholder="Напишите пошагово текст рецепта с добавлением фотографий"
                        modules={App.modules}
                        formats={App.formats}
                        onChange={handleQuill}
                        value={desc}
                    >

                    </ReactQuill>
                    <div className="add_recipe_form">
                        <p>Видеорецепт <br/>
                            (необязательно):
                        </p>
                        <div className="add_recipe_item">
                            <input className="big_input" placeholder="https://www.youtube.com/watch?v=BzI9SwOmvKs"
                                   type="text"
                                   value={video}
                                   onChange={e => setVideo(e.target.value)}
                            />
                            <span>Используйте видео в качестве альтернативы.</span>
                            <br/>
                            <span>Если вы хотите вставить видео с Youtube или Rutube,
                    для этого скопируйте и вставьте ссылку на видео в форму.</span>
                        </div>
                    </div>
                    <div className="button-add-recipe">
                        <Checkbox/>
                        <span> - Я согласен с <a href="">условиями размещения</a></span>
                    </div>
                    <div className="add_recipe_form">
                        <button className="button button-add-recipe" onClick={addRecipe}>Опубликовать</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )
}
export default AddRecipe