import '../style/footer.css'

import fb from "../img/fb.png"
import instagram from "../img/instagram.png"

function The_footer(){
    return(
        <footer>
        <div id="footer" className="footer">
          <div className="rs">
            <p>Join us</p>
            <span>
              <img src={fb} alt="Facebook" />
            </span>
            <span>
              <img src={instagram} alt="Instagram" />
            </span>

          </div>
          <div className="adresse">
            <p>22 rue Auguste Delaune</p>
            <p>62300 Lens</p>

          </div>

        </div>
      </footer>
    )
}

export default The_footer;