import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/Context';
import { useNavigate } from 'react-router-dom';

const CardProd = ({ setCartItems }) => {

  const { selectedProduct, currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showLoginButton, setShowLoginButton] = useState(false);



  const addToCart = () => {
    const uniqueId = `${selectedProduct.id}-${new Date().getTime()}`; // ID ייחודי
    setCartItems(prevItems => [...prevItems, { ...selectedProduct, id: uniqueId }]);
  };

  const btn = () => {
    if (!currentUser) {
      setMessage("You are not logged in, Cannot add products.");
      setShowLoginButton(true);
    } else {
      addToCart();
      setMessage("");
    }
  };


  const returnp = () => {
    navigate("/Products");
  };
  const toConnect = () => {
    navigate("/Connect");
  };


  const closeMessage = () => {
    setMessage("");
    setShowLoginButton(false);
  };



  if (!selectedProduct) {

    return <h2>המוצר לא נמצא</h2>;
  }

  return (
    <>
      <div className='card'>
        <h3>{selectedProduct.title}</h3>
        <p>{selectedProduct.desc}</p>
        <p>{selectedProduct.a}</p>
        <p>{selectedProduct.b}</p>
        <p>{selectedProduct.c}</p>
        <p>{selectedProduct.price} $</p>
        <img src={selectedProduct.img} alt={selectedProduct.title} />

        <button id='cp' onClick={returnp}>return</button>

        <button id='cp' onClick={btn}>add to cart</button>

      </div>

      {message && (
        <div className="message">
          <button id='x' onClick={closeMessage}>X</button>
          <p>{message}</p>
          {showLoginButton && (
            <button id='button' onClick={toConnect}>Connect</button>
          )}
        </div>
      )}
    </>
  );
};

export default CardProd;
