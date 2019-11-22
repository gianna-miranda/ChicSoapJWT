import React from 'react'
import { Link } from 'react-router-dom'
import './_AppNav.scss';

const NavBar = (props) => {
	return (
		<div >
        <nav className='nav'>
        <input type="checkbox" id="nav" className="nav--hidden" ></input>
            <div className="nav__menu--wrapper">
                <label htmlFor="nav" className="nav__menu--button">
                    <i className="nav__menu--icon"></i>
                    <i className="nav__menu--icon"></i>
                    <i className="nav__menu--icon"></i> 
                </label>
            </div>
            <div className="nav__logo--wrapper">
                <Link to="/" className="nav__logo__text">ChicEcoBelle</Link>
            </div>
        <div className="nav__list--wrapper">
        <ul className="nav__list">
			<Link className="nav__list--link" to="/">Home</Link>
            <Link className="nav__list--link" to="/products">Products</Link>
            <Link className="nav__list--link" to="/contact">Contact</Link>
			{props.currentUser
				? (
					<span>
						<Link className="nav__list--link" to="/admin">Admin</Link>
						<Link className="nav__list--link" to="/logout">Log Out</Link>
					</span>
				)
				: (
					<span>
						<Link className="nav__list--link" to="/login">Log In</Link>
						<Link className="nav__list--link" to="/signup">Sign Up</Link>
					</span>
				)
			}
            </ul>
            </div>
            </nav>
		</div>
	)
}

export default NavBar