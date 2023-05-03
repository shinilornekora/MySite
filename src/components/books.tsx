import React, {useState} from 'react';
import '../style/books.css'
import {useSelector} from "react-redux";
const Books = () => {
    const result = useSelector((state: any) => state.books)
    const [previousScrollPosition, setPreviousScrollPosition]: [null|number, any] = useState(null);
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    function cords() {
        let topScroll = document.documentElement.scrollTop
        if (previousScrollPosition === null) {
            setPreviousScrollPosition ( topScroll )
            return;
        }
        let result = (previousScrollPosition > topScroll) ? - 1 : 1; // true - вверх, false - вниз
        let name = document.querySelector ( ".name" ) as HTMLElement;
        let description = document.querySelector ( ".description" ) as HTMLElement;
        let books = document.querySelector ( ".books__wrapper" ) as HTMLElement;
        if (!name.style.fontSize && !description.style.fontSize) {
            name.style.fontSize = "44px";
            description.style.fontSize = "1rem"
        }
        let helper = Number ( name.style.fontSize.slice ( 0, - 2 ) ) + topScroll/100*result;
        name.style.fontSize = String (  helper+ "px");
        name.style.opacity = String(1 - ( helper/100));
        books.style.opacity = String(1 - ( helper/100));
        if (Number(name.style.opacity) <= 0)
            books.style.display = "none";
        else {
            books.style.display = "flex";
            books.style.flexDirection = "column";
        }
        setPreviousScrollPosition ( topScroll )
        console.log((previousScrollPosition > topScroll) ? "up" : "down")
    }

    document.onscroll = cords;

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