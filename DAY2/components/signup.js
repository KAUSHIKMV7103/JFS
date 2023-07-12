import "./signup.css";
import {Link} from 'react-router-dom';
function Signup()
{
    return(
        <div className="content_box">
            <div className="outer">
                
                <h1 id="head">Register your Account</h1>
                <div className="fields">
<br></br>
<br>
</br>
<input id="usrnm" type="name" required placeholder="Enter your name here"></input>
<br></br>
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
<input id="mob" type="" required placeholder="Enter your mobile number here"></input>
<br></br>
<br></br>
<br></br>
<br></br>

           <h4 id="lower">Already have an account?<Link to='/login'>Login</Link></h4>
           <button id="submit">LOGIN</button>
           </div>
                </div>
            </div>
   
       
    )
}

export default Signup;