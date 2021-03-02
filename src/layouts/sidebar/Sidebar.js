/* eslint-disable jsx-a11y/anchor-is-valid */
import Swal from 'sweetalert2'
import "./Sidebar.css";
import { APP_NAME, MENU_BUILDER } from '../../navigation/builders/menu.builders';
import ReactTooltip from 'react-tooltip';
import fire from '../../config/fire'

const currentURL = window.location.pathname

function Sidebar () {

    const logout = () => {
        Swal.fire({
            title: 'Are you sure to Logout?',
            icon: "warning",
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Logout`,
        }).then((result) => {
            if (result.isDenied) {
                fire.auth().signOut()
                sessionStorage.clear()
                window.location.href = MENU_BUILDER[MENU_BUILDER.length - 1].path
            }
        })
    }

    return (
        <div id="left-sidebar">
            <div className="sidebar"> 
                <h4 className="text-muted p-3">{ APP_NAME }</h4>
                <ul>
                    {
                        MENU_BUILDER.map((value, index) => {
                            if (value.path === '/login') {
                                return (
                                    <li key={ index }>
                                        <a href={'#'} onClick={ logout } 
                                            className={ currentURL === value.path ? "active" : ""}
                                            data-tip data-for={ value.icon }>
                                            <i className="material-icons">{ value.icon }</i>
                                        </a>
                                        <ReactTooltip id={ value.icon } place="right" type="dark" effect="float">
                                            <span>{ value.name }</span>
                                        </ReactTooltip>
                                    </li>
                                )
                            }
                            return (
                                <li key={ index }>
                                    <a href={ value.path } 
                                        className={ currentURL === value.path ? "active" : ""}
                                        data-tip data-for={ value.icon }>
                                        <i className="material-icons">{ value.icon }</i>
                                    </a>
                                    <ReactTooltip id={ value.icon } place="right" type="dark" effect="float">
                                        <span>{ value.name }</span>
                                    </ReactTooltip>
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
