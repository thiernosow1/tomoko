import '../style/App.css';
import {Link} from "react-router-dom"

import Tomoko_logo from "../img/Tomoko_logo.png"

function Header(){
    return(
        <header>
        <div className="header">
          <img src={Tomoko_logo} className="App-logo" alt="logo" />
          <nav className="nav_bar">
            <ul>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/menu'}><li>Menu</li> </Link>
              
            </ul>
          </nav>

        </div>
      </header>
    )
}

export default Header;