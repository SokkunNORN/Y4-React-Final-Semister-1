/* eslint-disable jsx-a11y/anchor-is-valid */

import { APP_NAME, MENU_BUILDER } from '../navigation/builders/menu.builders';

const currentURL = window.location.pathname

function Header () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">{ APP_NAME }</a>
                    <button className="navbar-toggler"
                        type="button" data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                MENU_BUILDER.map((value, index) => {
                                    return (
                                        <li className="nav-item" key={ index }>
                                            <a className={ currentURL === value.path ? "nav-link active" : "nav-link"}
                                                href={ value.path }>
                                                { value.name }
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header
