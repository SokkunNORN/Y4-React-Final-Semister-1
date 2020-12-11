/* eslint-disable jsx-a11y/anchor-is-valid */

import MENU_BUILDER from '../navigation/builders/menu.builders';

function Header () {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Y4 - Web Develop with Framework</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            {
                                MENU_BUILDER.map((value, index) => {
                                    return (
                                        <li class="nav-item" key={ index }>
                                            <a class="nav-link" href="#">{ value }</a>
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
