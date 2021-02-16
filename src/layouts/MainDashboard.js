
import Sidebar from './sidebar/Sidebar'
import './MainDashboard.css'

function MainDashboard ( props ) {
    return (
        <>
            <div className="wrapper d-flex">
                <Sidebar />

                <div className="contain">
                    <div className="container-fluid mt-4 pl-4 pr-4">
                        { props.children }
                    </div>
                </div>
            </div>     
        </>
    )
}

export default MainDashboard;
