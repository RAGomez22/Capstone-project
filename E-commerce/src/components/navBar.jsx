import { Link } from "react-router-dom";
import "../css_styling/navBar.css";

export default function NavBar({ setToken, token, cart }) {
  function logout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  const calculateTotal = () => {
    let totalItems = 0;
    let totalPrice=0;
    const productQuantities = {};

    cart.forEach((cartItem) => {
      totalItems += cartItem.quantity;
      if (productQuantities.hasOwnProperty(cartItem.id)) {
        productQuantities[cartItem.id].quantity += cartItem.quantity;
      } else {
        productQuantities[cartItem.id] = {
          item: cartItem.item,
          quantity: cartItem.quantity,
        };
        totalPrice += cartItem.price * cartItem.quantity; 
      }
    });

    return { totalItems, productQuantities,totalPrice };
  };

  const { totalItems, productQuantities, totalPrice } = calculateTotal();

  return (
    <>
      <div className="H1">
        <Link to="/">
          <div className="header">
            <img
              className="logo"
              src="../business-data-global-svgrepo-com.png"
              alt="Logo"
            />
            <h1 className="BrandName">GoMart Universal</h1>
          </div>
        </Link>
        <nav>
          <ul className="Nav">
            {token && (
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
            <li className="nav1">
              <Link to="/">Home</Link>
            </li>
            {!token && (
              <li className="nav1">
                <Link to="/login">Login</Link>
              </li>
            )}
            <li className="nav1">
              <Link to="/cart">
                Cart ({totalItems})
              </Link>
            </li>
            {cart.length>0&& (<li>Total Price: ${totalPrice} </li>)}
          </ul>
        </nav>
      </div>
    </>
  );
}
//Sign In Should have a terneary component that if user is logged in, 
//Should have option to create an Account in Sign Up redirect 
//Attempt a dropdown menu within navbar replicating Chewy NavBar
//Cart icon should have useState that shows quantity in cart 
//Icon should increment counts by one when something is added into cart 