import Contact from "./components/Contact"
 import  data from "./data.json"


export default function App() {
     const desserts = data.map((dessert) => (
        <Contact
            key={dessert.id}
            dessert={dessert}

            // image={dessert.image}
            // name={dessert.name}
            // category={dessert.category}
            // price={dessert.price}
        />
    ));

    return (
        <div className="principal_container">
                <div className="title_wrapping_container">
                    <h1 className="title">Desserts</h1>
                    <div className="desserts_section">
                        {desserts}
                    </div>
                </div>
                <div className="section_cart">
                    <h2>Your Cart is Empty</h2>
                    <img src="./assets/images/image-empty-cart.jpg" className="img_empty" alt="Empty Cart" />
                    <p> Your added items will appear here</p>
                </div>
        </div>
       
    )
}

//     return (
    // )

//       <div className="principal_container">
       
//                 <div className="desserts_section">
//                             <Contact
//                                 img="./assets/images/image-waffle-desktop.jpg"
//                                 name="Waffle"
//                                 description="Waffle with berries"
//                                 price="$6.50"
//                             />
//                             <Contact
//                             img="./assets/images/image-creme-brulee-desktop.jpg"
//                                 name="Crème Brûlée"
//                                 description="Vanilla Bean Crème Brûlée"
//                                 price="$7.00"
//                             />
//                             <Contact
//                                 img="./assets/images/image-macaron-desktop.jpg"
//                                 name="Macaron"
//                                 description="Mix of Five "
//                                 price="$8.00"
//                             />
//                             <Contact
//                                 img="./assets/images/image-tiramisu-desktop.jpg"
//                                 name="Tiramisu"
//                                 description="Classic Italian Tiramisu"
//                                 price="$5.50"
//                             />
                            

//                             <Contact
//                                 img="./assets/images/image-baklava-desktop.jpg"
//                                 name="Baklava"
//                                 description="Pistacho Baklava"
//                                 price="$4.00"
//                             />

//                             <Contact
//                                 img="./assets/images/image-meringue-desktop.jpg"
//                                 name="Lemon Sorbet"
//                                 description="Refreshing Lemon Sorbet"
//                                 price="$4.50"
//                             />
//                             <Contact
//                                 img="./assets/images/image-cake-desktop.jpg"
//                                 name="Red Velvet Cake"
//                                 description="Classic Red Velvet Cake"
//                                 price="$5.00"
//                             />
//                             <Contact
//                                     img="./assets/images/image-brownie-desktop.jpg"
//                                     name="Chocolate Brownie"
//                                     description="Rich Chocolate Brownie"
//                                     price="$5.50"
//                             />
//                             <Contact
//                                 img="./assets/images/image-panna-cotta-desktop.jpg"
//                                 name="Panna Cotta"
//                                 description="Classic Italian Panna Cotta"
//                                 price="$4.50"
//                             />

//                    </div>
//                         <div className="section_cart">
//                             <h2>Your Cart is Empty</h2>
//                             <img src="./assets/images/image-empty-cart.jpg" className="img_empty" alt="Empty Cart" />
//                             <p> Your added items will appear here</p>
//                         </div>
//         </div>  
//     )
// }

// export default App