import '../singleShopItem/singleShopItem.scss';

//Single Shop Item Component

function SingleShopItem() {
    return(
        <section className="single__item">
            <div className="back__wrap">
                <img src="" alt="back arrow" />
                <h3>Back to Shopping</h3>
            </div>
            <div className="item__info--wrap">
                <div className="image">
                    <img src="" alt="Item Image" />
                </div>

                <div className="item__info">
                    <h1>Item Name</h1>
                    <h2>$19.99</h2>
                    <p>Description of item from api lorem ipsum</p>
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