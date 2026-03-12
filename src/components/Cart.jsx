import { useContext, useEffect, useState } from "react";
import UserContext from "../context/Context";
import { useNavigate } from "react-router";

const Cart = ({ cartItems, deleteProd }) => {
    const navigate = useNavigate();
    const { currentUser, setTotalPrice } = useContext(UserContext); 
    const [totalPrice, setLocalTotalPrice] = useState(0); 

  useEffect(() => {
    const total = cartItems.reduce((a, item) => {
        return a + (parseFloat(item.price) || 0);
    }, 0);
    setLocalTotalPrice(total);
    setTotalPrice(total);
}, [cartItems]);


    const totaly = () => {
        navigate("/Buy");
    };

    return (
        <><div >
            {currentUser === null ? (
                <>
                <div className="cart">
                    <p id="notConnect">אינך מחובר</p>
                    <button onClick={() => navigate("/Connect")}>להתחברות</button>
               </div> </>
            ) : (
                <p>Hello {currentUser.username}</p>
            )}
            <div className="allProducts">
                {Array.isArray(cartItems) && cartItems.map((item, index) => (
                    <div key={index} className="prod">
                        <button onClick={() => deleteProd(item.id)} id="x" title="מחק">×</button>
                        <h2>{item.title} </h2>
                        <p>{item.price} $</p>
                        <img src={item.img} /> 
                    </div>
                ))
                }          

            </div>                         <h2>סך הכל: {totalPrice.toFixed(2)}$</h2>

            {totalPrice > 0 && currentUser!= null ? <button type="button" onClick={totaly}>Buy</button> : ""}
       </div> </>
    );
};

export default Cart;
