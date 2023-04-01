
import Union from "../images/Union.png"
import Notification from "../images/Notification.png"
import image4 from "../images/image 4.png"
import arrow_d from "../images/arrow_d.png"

export function Dashboard() {
    return (
        <>
            <nav className="dashoard-container">
                <div className="top_nav">
                    <div className="logo">
                                
                        <h1 className="lsql"><img className="union" src={Union} alt="" />lendsql</h1>
                    </div>
                    <div className="input">
                        <input typeof="text" placeholder="Search here...."/>
                    </div>
                    <div >
                        <ul className="d-list">
                            <li><a href="#">Docs</a></li>
                            <li><img src={Notification} alt="" /></li>
                            <li><img src={image4} alt="" /></li>
                            <li><a href="#"></a></li>
                            <li><img src={arrow_d} alt="" /></li>
                        </ul>
                    </div>

                </div>
                
                

            </nav>
            <div className="container">
            </div>
        </>
    )
}