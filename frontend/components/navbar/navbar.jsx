import React from 'react';
import { Link } from 'react-router-dom'; //Link welcome message to user profile later

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.currentUser === undefined) {
            return null;
        } else {
            return(
                <div className="navbar">
                    <Link to="/" className="nav-logo">HOMEBREWD</Link>
                    <Link to="/" className="nav-pub">The Pub</Link>
                    <Link to="/beers" className="nav-beers">Beers</Link>
                    <h4>Welcome, </h4>
                        <div className="dropdown">
                        <button className="dropbtn"><Link to={`/users/${this.props.currentUser.id}`} >{this.props.currentUser.username}!</Link>
                            </button>
                            <div className="dropdown-content">
                            <Link className="dropdown-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link>
                                <a className="dropdown-link" onClick={this.props.logout}>Logout</a>
                            </div>
                        </div>
                </div>

            )
        }
    }
}

export default Navbar;

//<button className="nav-button" onClick={this.props.logout}>Logout</button>