import React, { Component } from 'react';
import Header from './components/Header';

class Header extends Component {
    render() {
        return (
          
               <header className="App-header">
                <Link to="/">
                   <b>My Movie App</b>
                </Link>
                <Link to="/Movies">
                <button>Search Movies</button>
                </Link>
                <Link to="/Actors">
                <button>Search Actors</button>
                </Link>
                </header>
                
        );
    }
}

export default Header;