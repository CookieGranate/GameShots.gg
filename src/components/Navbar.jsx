import LoginButton from "../btn/LoginButton"
import Profile from "./Profile"
import Searchbar from "./Searchbar"

const Navbar = () => {
    return (
        <nav id="navbar">
            <div id="logodiv">
                <a href="/" id="logo">
                    <img src="https://cdn.discordapp.com/attachments/1066774277774385222/1066786201467637820/image.png" alt="logo" />
                </a>
            </div>
            
            <div id="links">
                <div id="center">
                    <ul>
                        <li>
                            <a href="/" id="feed">Feed</a>
                        </li>
                        <li>
                            <a href="/newest" id="newest">Newest</a>
                        </li>
                        <li>
                            <a href="/publish" id="publish">Publish</a>
                        </li>
                    </ul>
                </div>
            </div>

            <Searchbar />

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