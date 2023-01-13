import "./Navbar.css"
import logo from "/assets/earth.png"


export default () => {
    return(
        <nav>
            <img src={logo} alt="earth-logo"></img>
            My travel journal
        </nav>
    )
}