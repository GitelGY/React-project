
import { useContext } from "react";
import UserContext from "../context/Context";

const Buy = () => {
    const { totalPrice } = useContext(UserContext);


    const con=()=>{
alert("החשבונית נשלחה למייל")
    }
    
    return (
        <div id="form" >
            <h1>רכישה</h1>
            <p>סכום לתשלום: {totalPrice.toFixed(2)}$</p>
            <button onClick={con}>לאישור</button>

        </div>
    );
};

export default Buy;
