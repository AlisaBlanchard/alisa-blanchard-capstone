import '../singleShopItem/singleShopItem.scss';
import '../../styles/global.scss';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

//Single Shop Item Component

function SingleShopItem() {

    //State
    const [itemInfo, setItemInfo]= useState({});

    const {itemId} = useParams();

    //GET to retrieve specific item by itemId
    useEffect(() => {
        const URL = "http://localhost:5050";

        axios
        .get(`${URL}/merchandise`)

        .then((res) => {
            const items = res.data.merchandise;

            const foundItem = items.find((item) => item.itemId == itemId);
            
            setItemInfo(foundItem);
        });
    }, []);


    return(
        <section className="single__item">
            <div className="back__wrap">
                <img src="" alt="back arrow" />
                <h3>Back to Shopping</h3>
            </div>
            <div className="item__info--wrap">
                <div className="image">
                    <img src={itemInfo.image} alt="Item Image" />
                </div>

                <div className="item__info">
                    <h1>{itemInfo.itemName}</h1>
                    <h2>${itemInfo.price}</h2>
                    <p>{itemInfo.description}</p>
                    <h3>Sizes</h3>
                    <div className="size__wrap">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                    <button className="add__item">Add to Bag</button>

                </div>
            </div>

        </section>
    )
}

export default SingleShopItem;