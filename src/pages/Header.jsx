import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
                <Link className="navbar-brand" to="/">
                    My Gallery
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto"></ul>
                    <Link to="/add-image">
                        <button className="btn btn-info  my-3">Add Image</button>
                    </Link>
                    <Link to="/add-category">
                        <button className="btn btn-info  mx-4 my-3">Add Category</button>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
