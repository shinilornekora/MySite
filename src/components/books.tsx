import React from 'react';
import '../style/books.css'
import {useSelector} from "react-redux";
const Books = () => {
    const result = useSelector((state: any) => state.books)
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    const checker = function() {
        let element = document.querySelector ( ".name" ) as HTMLElement;
        let block = document.querySelector(".books__wrapper") as HTMLElement;
        if (!element || !block) {
            setTimeout ( checker, 100 )
            return
        }
        const startSize = 44; // начальный размер элемента
        const endSize = 120; // конечный размер элемента
        const scrollStart = 0; // начальная позиция скролла
        const scrollEnd = 100; // конечная позиция скролла
        const scrollHeight = scrollEnd - scrollStart; // высота прокрутки
        const sizeDiff = endSize - startSize; // разница в размере
        document.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = Math.min(scrollPosition / scrollHeight, 1); // процент прокрутки
            const newSize = startSize + sizeDiff * scrollPercent; // новый размер элемента
            if (element.style.fontSize == null)
                element.style.fontSize = "44px";
            element.style.fontSize = newSize + 'px'; // установка нового размера
            block.style.opacity = String(1 - (newSize - 44)/70)
            element.style.transition = 'height 0.3s ease-out'; // добавление CSS-анимации
        });
    }

    checker()
    return (
        <div className="parallax__example">
            <div className="books">
                <div className="books__wrapper">
                    <div className="name">
                        Daralis: the world beyond the border
                    </div>
                    <div className="description">
                        <p>
                            Explore the world of the corrupted reality in its various times.<br/>
                        </p>
                    </div>
                    <div className="books__placement">
                        {
                            result.map ( ( e: any ) => {
                                return (
                                    <div className="book">
                                        <div className="book__deco">
                                            <div className="wrapper__book">
                                                { e.serial }
                                            </div>
                                        </div>
                                        { e.name }
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
            </div>
            <div className="parallax">

            </div>
        </div>
    );
};

export default Books;