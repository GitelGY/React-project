import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/Context";

const Conect = () => {
    const navigate = useNavigate();

    const [usernameValue, setUsernameValue] = useState("");
    const [idValue, setIdValue] = useState("");

    const conectFunc = useContext(UserContext).userLoggedIn;
    const currentUser = useContext(UserContext).currentUser;

    useEffect(() => {
        if (currentUser != null)
            navigate("/Products")
    }, [currentUser])

    const loginClicked = () => {
        conectFunc(usernameValue, idValue)
        setUsernameValue("");
        setIdValue("");


    }

    return <>
        <form>
            <div className="connect">  
                <input id="input" type="text" placeholder="username" value={usernameValue} onChange={(e) => { setUsernameValue(e.target.value) }} />
                <input id="input" type="text" placeholder="id" value={idValue} onChange={(e) => { setIdValue(e.target.value) }} />
                <button type="button" onClick={() => { loginClicked() }}> Connect</button>
            </div>
        </form>
    </>



}
export default Conect;



