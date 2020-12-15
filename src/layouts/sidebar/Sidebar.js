import "./Sidebar.css";
import { APP_NAME, MENU_BUILDER } from '../../navigation/builders/menu.builders';

const currentURL = window.location.pathname

function Header () {
    return (
        <>
            <div className="sidebar"> 
                <h4 className="text-muted p-3">{ APP_NAME }</h4>
                <ul>
                    {
                        MENU_BUILDER.map((value, index) => {
                            return (
                                <li key={ index } className={ currentURL === value.path ? "active" : ""}>
                                    <a href={ value.path }>
                                        <i className={ value.icon }></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default Header
