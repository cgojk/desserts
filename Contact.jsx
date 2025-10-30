export default function Contact(props) {
    const {image, name, category, price}= props;
    return (

        <article className="dessert-card">
            <div className="main_container_dessert">
                    <div className="img_dessert_container">
                        <picture>
                                <source media="(min-width: 1024px)" srcSet={image.desktop} />
                                <source media="(min-width: 768px)" srcSet={image.tablet} />
                                <source media="(max-width: 767px)" srcSet={image.mobile} />
                            
                                <img className="image_dessert"
                                    src={image.desktop}
                                    alt={name}
                                />
                        </picture>
                        <button class="addtoCart">
                            <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                    <div class="product_info">

                        <p className="category">{category}</p>
                        <p className="name_product">{name}</p>
                        <p className="price">{price}</p>
                    </div>
           </div>
        </article>
    )
}

