
import Union from "../images/Union.png"
import Notification from "../images/Notification.png"
import image4 from "../images/image 4.png"
import arrow_d from "../images/arrow_d.png"

export function Dashboard() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#">
                    <img src={Union} alt="Logo" width="30" height="24" className="union"/><h4>lendsql</h4>
                    
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex collapse navbar-collapse"   id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-2">
                <h1 className="visually-hidden">Sidebars examples</h1>

                <div className="d-flex flex-column flex-shrink-0 p-3 text-c bgc">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-c text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
                        <span className="fs-4">Sidebar</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"/></svg>
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link text-c">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg>
                            Dashboard
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link text-c">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"/></svg>
                            Orders
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link text-c">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"/></svg>
                            Products
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link text-c">
                            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"/></svg>
                            Customers
                        </a>
                        </li>
                    </ul>
                    <hr/>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-c text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            
            
            {/* <div className="top_nav">
                <div className="logo">
                            
                    <h1 className="lsql"><img className="union"  alt="" />lendsql</h1>
                </div>
                    <input typeof="text" placeholder="Search here...."/>
                <div >
                    <ul className="d-list">
                        <li><a className="l1" href="#">Docs</a></li>
                        <li><img className="l2" src={Notification} alt="" /></li>
                        <li><img className="l3 " src={image4} alt="" /></li>
                        <li><a href="#"></a></li>
                        <li>Adedeji</li>
                        <li className="l4"><img src={arrow_d} alt="" /></li>
                    </ul>
                </div>

            </div>
            
            <div className="container">
                <div className="side-bar">
                    <nav>
                        <ul>
                            <li>Switch Organization</li>
                            <li>Dashboard</li>
                            <li>CUSTOMERS</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>

                <div className="main">
                    <div className="user-T"><a href="">User</a> </div>
                    <div className="user-activity">
                        <div className="u-1">
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="u-1">
                            <div></div>
                        </div>
                        <div className="u-1">
                            <div>
                                
                            </div>
                        </div>
                        <div className="u-1">
                            
                        </div>
                    </div>
                    <table>
                        
                    </table>
                </div>
            </div> */}
        </>
    )
}