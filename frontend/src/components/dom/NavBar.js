import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="ui orange inverted three item stackable menu">
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/menu">Menu</Link>
            <Link className="item" to="/orders">Your orders</Link>
        </div>
    )
}

export default NavBar;