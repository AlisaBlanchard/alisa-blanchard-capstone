import { useEffect, useState } from 'react';
import ItemCard from '../../components/itemCard/itemCard';
import '../shop/shop.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

//Shop Page 

function Shop() {
    //State
    const [shopItems, setShopItems] = useState([]);
    console.log(shopItems);

    //GET to retrieve full merchandise item array
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/merchandise`)

        .then((res) => {
            const items = res.data;
            console.log(res.data);
            
            setShopItems(items);
        });
    }, []);



    return(
        <section className="shop">
            <div className="hero">
                <h1>Call To Action</h1>
                <p>Hero Text about quality of life x products you can buy below!</p>
            </div>
            <div className="merch">
                {shopItems.map(item => {
                    console.log(item.price);

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