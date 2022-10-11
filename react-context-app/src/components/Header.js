import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../Context';
// import { CartState } from "../Context";
import "./styles.css";

export const Header = () => {
    const {cart} = useContext(CartContext)

    return (
      <div>
        <span className="header">React Context API</span>
        <ul className="nav">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
        </ul>
      </div>
    );
}
