// stateless functional component
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: 6,
                    padding:"6px 7px 6px 7px"
                }}>New blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;