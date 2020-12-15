import './index.css'
import { MENU_BUILDER } from '../../navigation/builders/menu.builders';

function Four0Four () {
    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-1 d-block">404</span>
                            <h2>Oops!</h2>
                            <div className="mb-4 lead">
                                We're sorry, 
                                <br/>
                                The page you were looking for doesn't exist anymore.
                            </div>
                            <a href={ MENU_BUILDER[0].path } className="btn btn-outline-danger">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Four0Four