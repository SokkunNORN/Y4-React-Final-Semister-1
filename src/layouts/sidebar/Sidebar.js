import "./Sidebar.css";
import { APP_NAME, MENU_BUILDER } from '../../navigation/builders/menu.builders';

const currentURL = window.location.pathname

function Sidebar () {
    return (
        <div id="left-sidebar">
            <div className="sidebar"> 
                <h4 className="text-muted p-3">{ APP_NAME }</h4>
                <ul>
                    {
                        MENU_BUILDER.map((value, index) => {
                            return (
                                <li key={ index }>
                                    <a href={ value.path } className={ currentURL === value.path ? "active" : ""}>
                                        <i className={ value.icon }></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar
