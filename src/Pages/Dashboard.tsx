
import Union from "../images/Union.png"
import Notification from "../images/Notification.png"
import image4 from "../images/image 4.png"
import arrow_d from "../images/arrow_d.png"

export function Dashboard() {
    return (
        <>
            <nav className="top_nav">
                <div className="">
                            
                    <h1 className=""><img className="" src={Union} alt="" />lendsql</h1>

                </div>
                <div>
                    <input typeof="text" placeholder="Search here...."/>
                </div>
                <div className="">
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><img src={Notification} alt="" /></li>
                        <li><img src={image4} alt="" /></li>
                        <li><a href="#"></a></li>
                        <li><img src={arrow_d} alt="" /></li>
                    </ul>
                </div>

            </nav>
            <div className="container">
            </div>
        </>
    )
}