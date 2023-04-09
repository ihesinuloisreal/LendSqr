import pablo from "../images/pablo-sign-in.png"
import Union from "../images/Union.png"
export function Login() {
    return (
        <div className="padding-0">
            <div className="row no-gutter">
                <div className="col-6 left">
                            
                    <div className="d-flex align-items-center gap-1">
                        <img className="size" src={Union} alt="" /> 
                        <h2 className="text-primary">lendsql</h2>
                    </div>
                    <img className="image" src={pablo}/>
                </div>
                <div className="col-6 form">
                <form className="f-pw">
                <div className="welcome">Welcome!</div>
                    <p className="w-p">Enter details to login</p>
                    <div className="mb-3">
                        {/* <label className="form-label">Email address</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        
                    </div>
                    <div className=" mb-3">
                        {/* <label className="form-label">Password</label> */}

                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Password"/>
                            <a className="input-group-text a" href="#">Show</a>
                            
                        </div>
                        
                    </div>
                    <a className="f-p" href="#">FORGOT PASSWORD</a>
                    <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                        
                    </div>
                    
                </form>
            
                </div>
                

                
            </div>
        </div>
    )
                       
}