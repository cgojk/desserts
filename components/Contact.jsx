 import {useState} from "react"

export default function Contact(props) {
    const { dessert } = props;
    const { image, name, category, price } = dessert;
    const [count, setCount] = useState(0);

    function handleAddToCart() {
        setCount(count + 1);
    }

    function handleRemoveFromCart() {
        if (count > 0) {
            setCount(count - 1);
        }
    }




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
                    alt={name}/>
            </picture>
         <div className="addtoCartContainer">
                 {count===0 ? (
                <button className="addtoCart addedtoCart" onClick={handleAddToCart}>
                 
                    <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />
                    
                    <span>Add to Cart</span>
                </button>
              ) : (
            <div className="counter_container addedtoCart"
            style ={{ 
                    backgroundColor: "var(--Red)",
                    border: "solid var(--Red) 0.12rem",
                    color: "var(--Rose-50)",
                    fontWeight: "var(--Weight-400)",
                    justifyContent: "space-around",
                    
                    height: "2.823125rem",
                    display: 'flex', alignItems: 'center', gap: '8px' }}>

                <button className="increment" onClick={handleAddToCart}>+</button>
                        <span>{count}</span>
                <button className="decrement" onClick={handleRemoveFromCart}>-</button>
             </div>
          )}
    </div>
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

