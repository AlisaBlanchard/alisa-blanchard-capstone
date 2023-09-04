import { useParams } from 'react-router-dom';
import '../article/article.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Article Component

function Article() {
    //State
    const [article, setArticle] = useState({});

    const {articleId} = useParams()

    //GET to retrieve Articles Array 
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/articles`)

        .then((res) => {
            const articles = res.data;

            const foundArticle = articles.find((article) => article.articleId == articleId);
            setArticle(foundArticle);

        });
    }, []);


    return (
        <section className="article">
            <div className="hero__wrap">
                <img src={`${article.image}`} alt="Hero Image" />
                <h1>{article.title}</h1>
            </div>
            <p>Written by: {article.author}</p>

            <article>
                {article.article}
            </article>
        </section>
    )
}

export default Article;