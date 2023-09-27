import { Link } from "react-router-dom"
import "../css_styling/navBar.css"
export default function NavBar(){
    return(
    <>
        <h1>Store</h1>
        <nav>
            <ul className="Nav">
                <li className="nav1"> <a>Cart</a> </li>
                <li className="nav1"> <a>Sign In</a> </li>
                <li className="nav1">  <a>Food</a> </li>
                <li className="nav1"> <a>Pharmacy</a> </li>
            </ul>
        </nav>
    </>
    )
}
//Sign In Should have a terneary component that if user is logged in, 
//Should have option to create an Account in Sign Up redirect 
//Attempt a dropdown menu within navbar replicating Chewy NavBar
//Cart icon should have useState that shows quantity in cart 
//Icon should increment counts by one when something is added into cart 