import '../itemCard/itemCard.scss';

// Item Card Component

function ItemCard() {
    return(
        <div className="itemCard">
            <img src="" alt="item image" />
            <div className="info__wrap">
                <p>Item Name</p>
                <p>Price</p>
            </div>

        </div>
    )
}

export default ItemCard;