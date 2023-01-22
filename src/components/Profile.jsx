import LogoutButton from "../btn/LogoutButton"

const Profile = () => {
    return (
        <div id="profile">
            <img src="#" alt="profilepic" id="pfp"/>
            <p id="username">username</p>

            <div id="profilemenu">
                <ul>
                    <li>
                        <a href="/account">Account</a>
                    </li>

                    <h3>Personalize</h3>
                    <li>
                        <h4>darkmode</h4>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </li>

                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile