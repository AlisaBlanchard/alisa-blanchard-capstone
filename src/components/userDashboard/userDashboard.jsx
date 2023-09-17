import { Link, useParams } from "react-router-dom";
import "../userDashboard/userDashboard.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import shopNow from '../../assets/Images/heroImages/rachel-mcdermott-mTJ0-5tMs6A-unsplash.jpg';



//User Dashboard Component

function UserDashboard() {

  const { userId } = useParams();

  //State
  const [article, setArticle] = useState({});
  console.log(article);

  //GET to retrieve Articles Array 
  useEffect(() => {
    const URL = "http://localhost:5050";

    axios
      .get(`${URL}/articles`)

      .then((res) => {
        const {articles} = res.data;
        // console.log(articles);

        const randomArticle = articles[Math.floor(Math.random() * articles.length)];
        setArticle(randomArticle);
      });
  }, []);


  return (
    <section id="userDashboard">
      <h1>Welcome Back!</h1>
      <div className="dashboard__wrap">
        <div className="tracker__wrap">
          <Link to={`/${userId}/tracker`}>
            <div className="tracker">
              <p>New Tracker Session</p>
            </div>
          </Link>

          <Link to={`/profile/${userId}`}>
            <div className="tracker__data">
              <p>See My Tracker Data</p>
            </div>
          </Link>
        </div>

        <Link to={`/article/${article.articleId}`}>
          <div className="article">
            <img src={article.image} alt="Article Image" />
            <p>{article.title}</p>
          </div>
        </Link>
      </div>

      <Link to='/shop'>
        <div className="shop__cta">
          <img src={shopNow} alt="Shop Now image" />
          <p>Shop Now</p>
        </div>
      </Link>
    </section>
  );
}

export default UserDashboard;
