import pablo from "../images/pablo-sign-in.png"
import Union from "../images/Union.png"
export function Login() {
    return (
        <div className="row">
            <div className="col-6">
            <div className="right-head">
                        
                        <h1 className="lendsql"><img className="union-img" src={Union} alt="" />lendsql</h1>

                    </div>
                    <img className="image" src={pablo}/>
            </div>
            <div className="col-6">
            <form>
                        <h3 className="welcome">Welcome</h3>
                        <p>Enter details to login</p>
                        
                        <div className="label">
                        <label className="form-control-2" typeof="text" />
                        </div>

                        <div className="label">
                        <label className="form-control-2" typeof="text" /> <button className="btn-show">Show</button> 
                        </div>
                        

                        <div><a href="#" className="forgot-pass">Forgot PASSWORD?</a></div>
                        

                        <div><button className="btn">LOG IN</button></div>
                            

                    </form>
            <div className="btn btn-primary">click</div>

            </div>
        </div>
    )
                       
}