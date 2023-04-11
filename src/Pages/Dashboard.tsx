
import Union from "../images/Union.png"
import Notification from "../images/Notification.png"
import image4 from "../images/image 4.png"
import arrow_d from "../images/arrow_d.png"
import vector1 from "../images/Vector (1).png"
import vector2 from "../images/Vector (2).png"
import vector3 from "../images/Vector (3).png"
import vector4 from "../images/Vector (4).png"
import naira from "../images/₦.png"
import tbr from '../images/tba.png'
import btn from "../images/btn.png";


export function Dashboard() {
    return (
        <>
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary center">
                    <div className="container-fluid ">
                        
                            <div className="col-3">
                                <a className="navbar-brand d-flex" href="#">
                                <img src={Union} alt="Logo" width="30" height="24" className="union"/><h4>lendsql</h4>
                                
                                </a>
                            </div>
                            <div className="col-9">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="row">
                                    <div className="col-3">
                                        <div className="d-flex collapse navbar-collapse"   id="navbarSupportedContent">
                                        <input type="text" className="form-control" placeholder="Password"/>
                                            <a className="input-group-text a" href="#">Show</a>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                    <ul className="d-list d-flex ul">
                                    <li className="li"><a className="l1" href="#">Docs</a></li>
                                    <li className="li"><img className="l2" src={Notification} alt="" /></li>
                                    <li className="li"><img className="l3 " src={image4} alt="" /></li>
                                    <li className="li"><a href="#"></a></li>
                                    <li className="li">Adedeji</li>
                                    <li className="l4 li"><img src={arrow_d} alt="" /></li>
                                </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid bg">
                <div className="row flex-nowrap ">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bgc side-n">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center  mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5  d-none d-sm-inline ">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0">
                                        <img src={vector1} alt="" /> <span className="ms-1 d-none d-sm-inline">Home</span><img src={arrow_d} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <img src={vector2} alt="" /> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle">
                                    <img src={vector3} alt="" /> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                                </li>
                                <li>
                                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <img src={naira} alt="" /> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <img src={vector4} alt="" /><span className="ms-1 d-none d-sm-inline">Products</span> </a>
                                        <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                            <hr/>
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                    <span className="d-none d-sm-inline mx-1">loser</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-10 py-3">
                        <h3 className="h3">User</h3>

                        <div className="container">
                            <div className="row">
                            
                                <div className="col-3">
                                    <div className="card card-st">
                                        <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-st">
                                        <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-st">
                                        <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-st">
                                        <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <table className="table bgc table-t">
                                <thead>
                                    <tr>
                                    <th scope="col text-upercase">organization <img src={tbr} alt="" /></th>
                                    <th scope="col">Username <img src={tbr} alt="" /></th>
                                    <th scope="col">Email <img src={tbr} alt="" /></th>
                                    <th scope="col">Phone number <img src={tbr} alt="" /></th>
                                    <th scope="col">Date joined <img src={tbr} alt="" /></th>
                                    <th scope="col">Status <img src={tbr} alt="" /></th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">IENetwork</th>
                                        <td >Larry the Bird</td>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                        <td><img src={btn} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                
                    </div>
                </div>
                    
            </div>
        </>
    )
}