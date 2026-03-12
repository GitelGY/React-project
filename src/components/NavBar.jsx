import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/Context";

const NavBar = () => {

  const currentUser = useContext(UserContext).currentUser;
  const userLoggedOut = useContext(UserContext).userLoggedOut;
  return <>
    <nav>

      < Link id="Link" to="Home">Home</Link>
      <Link id="Link" to="about">About</Link>
      <Link id="Link" to="products">Products</Link>
      <Link id="Link" to="cart">Cart</Link>
      {currentUser && currentUser.username === "management" && currentUser.id === "1212" ? (
        <Link id="Link" to="/AddProduct">AddProduct</Link>) : ("")}
      {currentUser === null ? <Link id="Link" to="Connect">Connect</Link> : <Link id="Link" onClick={() => { userLoggedOut() }}>Logged off</Link>}

    </nav>
  </>
}
export default NavBar;