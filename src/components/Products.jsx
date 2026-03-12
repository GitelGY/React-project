import { useNavigate } from "react-router";
import '../App.css';
import { useContext, useState } from "react";
import UserContext from "../context/Context";

const Products = ({ p }) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");  
        const { setSelectedProduct, currentUser } = useContext(UserContext);

    const handleViewDetails = () => {
        setSelectedProduct(p);

        navigate("/CardProd");
    };


    return (
        <>
            {message && <div className="overlay" />}
            <div className="prod">
                <h1>{p.title}</h1>
                <p>{p.price} $</p>
                <img src={p.img} alt={p.title} />
                <button onClick={handleViewDetails}>for details</button>

            </div>
        </>
    );
};

export default Products;