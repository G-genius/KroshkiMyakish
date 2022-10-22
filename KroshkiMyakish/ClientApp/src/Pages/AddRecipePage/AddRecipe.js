import "./AddRecipe.css"
import FileBase64 from 'react-filebase64';
const AddRecipe = () => {
    return (
        <div className="add_recipe">
            <h1>Добавление рецепта</h1>
            <div>
                <span>Название рецепта</span>
                <input type="text"/>
            </div>
            <div>
                <span>Краткое описание</span>
                <input type="text"/>
                <span>
                    Обязательно напишите 2-3 строки - что это за блюдо, его особенности, вкусовые качества.
                    <br/>
                    Этот текст будет показываться в качестве анонса к Вашему рецепту -
                    и именно по этому тексту люди будут определять, стоит читать Ваш рецепт - или нет.
                </span>
            </div>
            <div>
                <span>Основное фото</span>
                <FileBase64 />
            </div>
            <div>
                <span>Рубрика</span>
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
            <div>
                <span>Время приготовления</span>
                <input type="text"/>
                <span>(минут)</span>
            </div>
            <div>
                <span>Количество порций</span>
                <input type="text"/>
            </div>
            <div>
                <span>Ингридиенты</span>
                <input type="text"/>
            </div>
            <div>
                <span>Видеорецепт(необязательно)</span>
                <input type="text"/>
                <span>Используйте видео в качестве альтернативы</span>
                <span>Если Вы хотите вставить видео с Youtube или Rutube,
                    для этого скопируйте и вставьте ссылку на видео в форму.</span>
            </div>
            <div>
                <span>Текст рецепта</span>
                <input type="text"/>
            </div>
            <div>
                <input type="checkbox"/>
                <span> - Я согласен с <a href="">условиями размещения</a></span>
            </div>
            <button>Опубликовать</button>
        </div>
    )
}
export default AddRecipe