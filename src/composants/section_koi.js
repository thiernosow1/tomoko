import '../style/koi.css'

import tapis_rouge from "../img/tapis_rouge.png"
import saumon from "../img/saumon.svg"

function Section_koi(){
    return(
        <section className="global">
        <div className="koi">
          <div className="koi_left">
            <div className="margin_bottom">
              <h1 className="titre align_left chivo_black">Koi <br></br>Deroulez le tapis rouge</h1>
              <p className="desc align_left text_justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip </p>
            </div>
            <h1 className="categories alignLeft">Les sushis de cette catégories</h1>

          </div>

          <div className="koi_right">
            <div className="couverture_koi">
              <img src={saumon} alt="Un saumon"/>
              <p className="saumon">Sushi au saumon <br></br> Un incontournable</p>
            </div>
          </div>
        </div>

        <div className="menu_defilant">
          <img src={tapis_rouge} alt="Menu défilant" />
          <img src={tapis_rouge} alt="Menu défilant" />
        </div>

      </section>
    )
}

export default Section_koi
