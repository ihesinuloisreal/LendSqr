
import Union from "../images/Union.png"
import Notification from "../images/Notification.png"
import image4 from "../images/image 4.png"
import arrow_d from "../images/arrow_d.png"

export function Dashboard() {
    return (
        <>
            
            <div className="top_nav">
                <div className="logo">
                            
                    <h1 className="lsql"><img className="union" src={Union} alt="" />lendsql</h1>
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
            </div>
        </>
    )
}