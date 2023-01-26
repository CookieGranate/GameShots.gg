import facebooklogo from "./img/facebook_icon.png";
import googlelogo from "./img/google_icon.png"

const Oauth = () => {
    return (
        <div id="oauth">
            <div id="authbtns">
                <ul>
                    <li>
                        <button id="googleauth" className="authbtn" onClick={() => window.location.href = '#'}>
                            <img id="googlelogo" className="authlogo" src={googlelogo} alt="Google Logo" />
                            <p>Log in with Google</p> 
                        </button>
                    </li>

                    <li>
                        <button id="fbauth" className="authbtn" onClick={() => window.location.href = '#'}>
                            <img id="fblogo"className="authlogo" src={facebooklogo} alt="Facebook Logo" />
                            <p>Log in with Facebook</p>
                        </button>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Oauth;