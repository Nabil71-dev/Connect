import { useState } from 'react';
import style from '../../../../../styles/topics_vacancy.module.css';

function Article({ text }) {

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <>
            <article>
                {isReadMore ? text.slice(0, 80) : text}
                <span onClick={toggleReadMore} className={`${style.showHide}`}>
                    {isReadMore ? "...Read more" : "  Show less"}
                </span>
            </article>
        </>
    );
}

export default Article;