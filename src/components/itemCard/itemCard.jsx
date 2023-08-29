import '../itemCard/itemCard.scss';

// Item Card Component

function ItemCard({key, img, name, price}) {
    // State

    return(
        <div className="itemCard">
            <img src={img} alt="item image" />
            <div className="info__wrap">
                <p>{name}</p>
                <p>{price}</p>
            </div>

        </div>
    )
}

export default ItemCard;