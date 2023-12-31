import { useEffect, useState } from 'react';
import ItemCard from '../../components/itemCard/itemCard';
import '../shop/shop.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import shopHero from '../../assets/Images/heroImages/rachel-mcdermott-mTJ0-5tMs6A-unsplash.jpg';


//Shop Page 

function Shop() {
    //State
    const [shopItems, setShopItems] = useState([]);

    //GET to retrieve full merchandise item array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/merchandise`)

        .then((res) => {
            const items = res.data.merchandise;
            
            setShopItems(items);
        });
    }, []);



    return(
        <section className="shop">
            <div className="hero">
                <img src={shopHero} alt="Hero Image" />

                <div className="hero__text">
                    <h1>Shop Our Merch</h1>
                    <p>Elevate Your Life: Unlock Precision, Achieve Progress</p>
                </div>
            </div>
            <div className="merch">
                {shopItems.map(item => {
                    const itemId = item.itemId;

                    return(
                        <Link to={`/shop/${itemId}`}>
                            <ItemCard 
                                key={item.itemId}
                                img= {item.image}
                                name= {item.itemName}
                                price= {item.price}
                            />
                        </Link>
                        )
                })}
            </div>

        </section>
    )
}

export default Shop;