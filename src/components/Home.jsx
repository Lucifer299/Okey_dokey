
import { Link } from "react-router-dom";
// import './media.css'
// import './main.css'


function Home() {
  return (
    <>
    <div className='wrapper'>
        <header>
        <img src="./assets/Aleksey.svg" alt=""/>
        <nav>
            <ul>
                <li>
                    <Link to="project">Опросник</Link>
                </li>
                
                <li>
                    <Link to="about">Модальное окно</Link>
                </li>
                
            </ul>
            
        </nav>
    </header>

    <main>
            <div className="info">
                <h1>Краткий опрос </h1>
                <button><a href="https://ru.legacy.reactjs.org/" target="_blank">Документация</a></button>
            </div>
            <div className="image">
                <img src="./assets/001.svg" alt=""/>
            </div> 
    </main>

    <section>
        <article className="one" >
            <h2 >
                React
            </h2>
            <div>
                <p>
                React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений
                </p>
            </div>
        </article>
        <article className="two">
            <h2>
            Объектно-ориентированное программирование
            </h2>
            <div>
                <p>
                ООП — это способ написания кода, позволяющий создавать объекты с помощью одного объекта. В этом также заключается суть шаблона проектирования «Конструктор». Общий объект, обычно, называется планом, проектом или схемой (blueprint), а создаваемые с его помощью объекты — экземплярами (instances).

                Каждый экземпляр имеет как свойства, наследуемые от родителя, так и собственные свойства. Например, если у нас имеется проект Human (человек), мы можем создавать на его основе экземпляры с разными именами.

                Второй аспект ООП состоит в структурировании кода, когда у нас имеется несколько проектов разного уровня. Это называется наследованием (inheritance) или классификацией (созданием подклассов) (subclassing).
                </p>
            </div>
        </article>
        <article className="thee">
            <h2>
                Компоненты
            </h2>
            <div>
                <p>
                позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз.
                </p>
            </div>
        </article>
        <article className="two">
            <h2>
                Хуки
            </h2>
            <div>
                <p>
                это специальная функция, которая позволяет «подцепиться» к возможностям React. Например, хук useState предоставляет функциональным компонентам доступ к состоянию React.<br/>
                Раньше, если вы писали функциональный компонент и осознавали, что вам нужно наделить его состоянием, вам приходилось превращать этот компонент в класс. Теперь же вы можете использовать хук внутри существующего функционального компонента.
                </p>
            </div>
        </article>
        <article className="two">
            <h2>
            JSX
            </h2>
            <div>
                <p>
                JSX — расширение языка JavaScript. Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI. JSX напоминает язык шаблонов, наделённый силой JavaScript.
                React исходит из принципа, что логика рендеринга неразрывно связана с прочей логикой UI: с тем, как обрабатываются события, как состояние изменяется во времени и как данные готовятся к отображению.

                Вместо того, чтобы искусственно разделить технологии, помещая разметку и логику в разные файлы, React разделяет ответственность с помощью слабо связанных единиц, называемых «компоненты», которые содержат и разметку, и логику. Мы ещё вернёмся к теме компонентов в следующей главе, но если идея держать разметку в JavaScript-коде всё ещё вызывает у вас дискомфорт, этот доклад может переубедить вас.

                React можно использовать и без JSX, но большинство людей ценит его за наглядность при работе с UI, живущем в JavaScript-коде. Помимо этого, JSX помогает React делать сообщения об ошибках и предупреждениях понятнее.
                </p>
            </div>
        </article>
    </section>
    
    <footer>
        2023 &copy: Lucifer
    </footer>
    </div>
    </>
    )
  }

export {Home}