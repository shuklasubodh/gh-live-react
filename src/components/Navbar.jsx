import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <Link to="/gh-live-react/home">Home</Link> | 
                <Link to="/gh-live-react/about">About</Link> | 
                <Link to="/gh-live-react/contact">Contact</Link> | 
            </nav>
        </>
    )
}

export default Navbar