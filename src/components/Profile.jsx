import LogoutBtn from "./btn/LogoutBtn"
import emptyuser from '../img/user_icon.png'

const Profile = () => {
    return (
        <div id="profile">
            <img src={emptyuser} alt="emptyuser" id="pfp" />
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
                        <LogoutBtn />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile