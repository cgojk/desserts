


import { useState } from "react";
import Contact from "./components/Contact";
import data from "./data.json";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";

export default function App() {
//  Cart is an array
  const [cartItems, setCartItems] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);



  function handleAddToCart(dessert, decrement = false) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dessert.id);

      if (existingItem) {
        if (decrement) {
          // Decrease quantity or remove if quantity is 1
          if (existingItem.quantity === 1) {
            return prevItems.filter((item) => item.id !== dessert.id);
          } else {
            return prevItems.map((item) =>
              item.id === dessert.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          }
        } else {
          // Increment quantity
          return prevItems.map((item) =>
            item.id === dessert.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
      } else {
        // Add new item to cart
        return [...prevItems, { ...dessert, quantity: 1 }];
      }
    });
  }

  //  Function to remove an item completely from the cart
  function handleRemoveItem(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
    // Function to handle order confirmation
    function handleConfirmOrder() {
        setShowOverlay(true);
    }
    
    // Function to start a new order
    function handleStartNewOrder() {
        setCartItems([]);
        setShowOverlay(false);
    }
    // function close overlay
    function handleCloseOverlay() {
        setShowOverlay(false);
    }

  //   Map through desserts and pass handlers
  const desserts = data.map((dessert) => (
    <Contact
      key={dessert.id}
      dessert={dessert}
      cartItems={cartItems}
      onAdd={handleAddToCart}
      onRemove={handleRemoveItem}
    />
  ));

  // Render the app
  return (
    <div className="principal_container">
      <div className="title_wrapping_container">
        <h1 className="title">Desserts</h1>
        <div className="desserts_section">{desserts}</div>
      </div>

      <div className="section_cart">
        <Cart
          cartItems={cartItems}
          onRemove={handleRemoveItem}
          onConfirm={handleConfirmOrder}
         
        />
      </div>
      {showOverlay && (
        <Overlay
          cartItems={cartItems}
          onStartNewOrder={handleStartNewOrder}
            onCloseOverlay={handleCloseOverlay}
        />
      )}
         
   

    
    </div>
  );
}

