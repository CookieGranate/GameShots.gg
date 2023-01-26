import Oauth from "../components/login/Oauth";

const Login = () => {

    return (
        <div id="signinbox">
            <h2>Sign into your account with Email, Google or Facebook</h2>

            <div id="signinform">
                <form action="">
                    <div id="emaildiv">
                        <label htmlFor="email" className="email">Email</label><br />
                        <input placeholder="Email" type="email" name="email" id="email" className="input-field" required /><br />
                    </div>
                    <div id="passworddiv">
                        <label htmlFor="password" className="input_label" id="passwordlabel">Password</label><br />
                        <input placeholder="Password" type="password" name="password" id="password" className="input-field password" required />
                    </div>

                    <input type="submit" value="Log in" id="loginbtn" />
                </form>
            </div>

            <div id="oauthdiv">
                <Oauth />
            </div>
            

            <div id="signup">
                <p>Don't have an account yet? <a href="/auth/signup">Sign Up</a> to create a new account.</p>
            </div>

            <div id="return">
                <a href="/">Return Home</a>
            </div>
        </div>
    )
}

export default Login;