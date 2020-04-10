import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const AdapterLink = ((props: any) => (
    <Link {...props} />
));

interface INavBarProps {
    page: string,
    name?: string,
}

const NavBar: React.FC<INavBarProps> = (props) => {
    return (
        <React.Fragment>
            <div className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
                <div className="container">
                <AdapterLink to="/" className="navbar-brand">{props.name ? props.name : "Report Stolen Car"}</AdapterLink>
                {/* <button className="navbar-toggler" type="button" >
                    <span className="oi oi-menu"></span> Menu
                </button> */}

                <div className="navbar">
                    <ul className="navbar-nav ml-auto">
                    <li className={props.page === "home" ? "nav-item active" : "nav-item "}><AdapterLink to="/" className="nav-link">Home</AdapterLink></li>
                    <li className={props.page === "police" ? "nav-item active" : "nav-item "}><AdapterLink to="/police/complains" className="nav-link">Complaints</AdapterLink></li>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavBar;