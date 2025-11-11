
export default function Cart({ cartItems, onRemove, onAdd, onDecrease, onConfirm }) {
  const isCartEmpty = cartItems.length === 0;


  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="wrapping__cart">
      {isCartEmpty ? (
        <>
          <h2>Your Cart is Empty</h2>
          <img
            src="./assets/images/image-empty-cart.jpg"
            className="img_empty"
            alt="Empty Cart"
          />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <section className="ordered__section">
          <h2 className="cart-title">Your Cart</h2>

          <ul>
            {cartItems.map((item) => (
              <li className="list_items" key={item.id}>
                <span>{item.name} x {item.quantity}</span>
                <div className="cart-controls">
                  
                  <span> ${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    className="cancel__btn"
                    onClick={() => onRemove(item.id)}
                  >
                    ✖
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="order__total">
            <p className="order__total-label">Order Total</p>
            <h3 className="final__amount">${orderTotal.toFixed(2)}</h3>
          </div>

          <div className="remark">
            <img
              src="assets/images/icon-carbon-neutral.svg"
              alt="tree icon"
              className="tree"
            />
            <p className="message">
              This is a <span className="carbon">carbon-neutral</span> delivery
            </p>
          </div>

          <button
  className="confirm__btn"
  type="button"
  onClick={onConfirm}
>
  Confirm Order
</button>
        </section>
      )}
    </div>
  );
}

