import { Link, useParams } from "react-router-dom";
import "../userDashboard/userDashboard.scss";
import { useEffect, useState } from "react";
import axios from "axios";



//User Dashboard Component

function UserDashboard() {

  const {userId} = useParams();

  //State
  const [article, setArticle] = useState({});

  //GET to retrieve Articles Array 
  useEffect(() => {
    const URL = "http://localhost:5050";

    axios
    .get(`${URL}/articles`)

    .then((res) => {
        const articles = res.data;

        const randomArticle = articles[Math.floor(Math.random()*articles.length)];
        console.log(randomArticle);
        setArticle(randomArticle);
    });
}, []);


  return (
    <section id="userDashboard">
      <h1>Welcome Back!</h1>
      <div className="dashboard__wrap">
        <div className="tracker__wrap">
          <Link to={`/tracker/${userId}`}>
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

        <Link to='/:articleId'>
          <div className="article">
            <img src={article.image} alt="" />
            <p>{article.title}</p>
          </div>
        </Link>
      </div>
      
      <Link to='/shop'>
        <div className="shop__cta">
          <p>Shop Now</p>
        </div>
      </Link>
    </section>
  );
}

export default UserDashboard;
