import "./signup.css";
import {Link} from 'react-router-dom';
function Login()
{
    return(
        <div className="content_box">
            <div className="outer">
                
                <h1 id="head">Sign in</h1>
                <div className="fields">

<br></br>
<br></br>
<input id="eml" type="email" required placeholder="Enter your email here"></input>
<br></br>
<br></br>
<br></br>
<input id="pwd" type="password" required placeholder="Enter your password here"></input>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
           <h4 id="lower">Dont have an account?<Link to='/'>Register</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Login;