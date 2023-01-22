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

                    <li>
                        <a href="/settings">Settings</a>
                    </li>

                    {/* <div className="emptybarprofile"></div> */}

                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile