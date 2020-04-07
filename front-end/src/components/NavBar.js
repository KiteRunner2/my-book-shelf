import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    const [isShown, setShown] = useState(false);
    let showClass = !isShown
        ? `collapse navbar-collapse`
        : `collapse navbar-collapse show`;
    const style = {
        jumbotron: {
            backgroundImage: "url('./img/book.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-3">
                <a className="navbar-brand" href="#">
                    My Book Collection
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShown(!isShown)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={showClass} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link">
                                Saved
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/search" className="nav-link">
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                className="jumbotron jumbotron-fluid text-center text-black"
                style={style.jumbotron}
            >
                <div className="container">
                    <h1 className="display-4">Your book shelf</h1>
                    <p className="lead">Search for and view your saved books</p>
                </div>
            </div>
        </>
    );
}

export default NavBar;
