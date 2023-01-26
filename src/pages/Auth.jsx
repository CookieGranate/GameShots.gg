const Auth = () => {
    return (
        <div id="signinbox">
            <h2>Sign into your account with Email, Google or Facebook</h2>

            <div id="signinform">
                <form action="">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="text" name="email" id="email" className="input-field" /><br />

                    <label htmlFor="password" className="input_label">Password</label>
                    <input type="text" name="password" id="password" className="input-field" /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div id="signup">
                <p>Don't have an account yet? <a href="/signup">Sign Up</a> to create a new account.</p>
            </div>
        </div>
    )
}

export default Auth;