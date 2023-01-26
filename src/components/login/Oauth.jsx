const Oauth = () => {
    return (
        <div id="oauth">
            <ul>
                <li>
                    <button id="googleauth" onClick={() => window.location.href = '#'}>Log in with Google</button>
                </li>

                <li>
                    <button id="fbauth" onClick={() => window.location.href = '#'}>Log in with Facebook</button>
                </li>
            </ul>
        </div>
    )
}

export default Oauth