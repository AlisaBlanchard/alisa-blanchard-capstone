import '../shop/shop.scss';

//Shop Page 

function Shop() {
    return(
        <section className="shop">
            <div className="hero">
                <h1>Call To Action</h1>
                <p>Hero Text about quality of life x products you can buy below!</p>
            </div>
            <div className="merch">
                {/* CARD COMPONENT HERE*/}
                <div className="card">Item Card 1</div>
                <div className="card">Item Card 2</div>
            </div>

        </section>
    )
}

export default Shop;