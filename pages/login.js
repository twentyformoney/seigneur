import { FaUserAlt } from "react-icons/fa";

export default function login(){
    return(
        <>
        <div className="modul">
        <div className="modul-login">
            <div className="atas-login">
            <h1>Account Login <FaUserAlt/></h1>   
            </div> 
            <div className="inputan-login">
            <div className="input-container">
            <input className="input" placeholder="Username"></input> 
            </div>
            <div className="input-container">
            <input className="input" type="Password" laceholder="Password"></input>
            </div>
            <a className="create-akun" href="">New? Create New Account.</a>
            </div>
            <div className="input-container">
                <button className="btnlogin">Login</button>
            </div>
        </div>
        </div>
        </>
    )
}