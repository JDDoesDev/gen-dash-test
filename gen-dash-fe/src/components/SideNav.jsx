import React from 'react';
import '../styles/SideNav.scss'
import { NavLink } from 'react-router-dom';


class SideNav extends React.Component {
	render() {
		return (
			<div>
                <NavLink 
                    exact to="/">
                    Home
                </NavLink>
			</div>
		);
	}
}

export default SideNav;
