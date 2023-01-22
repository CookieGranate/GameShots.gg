import LoginButton from "../btn/LoginButton"
import Profile from "./Profile"

const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="/"><img src="" alt="" />Gameshots.gg</a>

            <div id="links">
                <div id="center">
                    <ul>
                        <li>
                            <a href="/">Feed</a>
                        </li>
                        <li>
                            <a href="/newpost">Newest</a>
                        </li>
                        <li>
                            <a href="/publish">Post</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="profile">
                {/* showed in the beginning / not logged in */}
                <div id="notloggedin">
                    <LoginButton />
                </div>

                {/* showed if logged in */}
                <div id="loggedin">
                    <Profile />
                </div>
            </div>
        </nav>
    )
}

export default Navbar