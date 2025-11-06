export default function Overlay({ cartItems, onStartNewOrder, onCloseOverlay }) {
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="overlay">
      <section className="checkout">
        <article className="confirmation__section">
          <img
            src="assets/images/icon-order-confirmed.svg"
            alt="check"
            className="checking-icon"
          />
           <button className="cancel_overlay_btn" onClick={onCloseOverlay}>
                ✖
            </button>
          <h1 className="confirmation__order">Order Confirmed</h1>
          <p className="confirmation__message">We hope you enjoy your food!</p>
        </article>

        <section className="ordered__section-check">
          <ul className="product-details__checkout">
            {cartItems.map(item => (
              <li className="list_items" key={item.id}>
                {item.name} x {item.quantity} — $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>

          <div className="order__total-check">
            <p className="order__total-label">Order Total</p>
            <h3 className="final__amount">${orderTotal.toFixed(2)}</h3>
          </div>
        </section>

        <button className="start-new__btn" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </section>
    </div>
  );
}