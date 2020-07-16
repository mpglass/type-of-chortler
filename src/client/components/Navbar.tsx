import * as React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component<NavbarProps, NavbarState> {
    render(){
        return(
            <nav className="nav justify-content-center border-bottom border-success p-3">
                <NavLink className="text-decoration-none btn btn-link" activeClassName="border-bottom border-primary" exact to="/">Home</NavLink>
                <NavLink className="text-decoration-none btn btn-link" activeClassName="border-bottom border-primary" exact to="/compose">Compose</NavLink>
            </nav>
        )
    }
}

interface NavbarProps {}
interface NavbarState {}

export default Navbar; 