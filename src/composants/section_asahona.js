import '../style/koi.css'
import '../style/asahona.css'

import sushi_vegan from "../img/sushi_vegan.svg"
import tapis_vert from "../img/tapis_vert.png"

function Section_asahona(){
    return(
        <section className="global">
        <div className="asahona">

          <div className="asahona_left">
          <p className="sushi_vert">Sushi rouleau de printemps 
              <br></br> Bon goût sans cruauté</p>
            <div className="couverture_asahona">
              
              <img src={sushi_vegan} alt="Un saumon"/>
              
            </div>
          </div>
          <div className="asahona_right">
            <div className="margin_bottom_75px">
              <h1 className="titre align_right chivo_black">Asahona <br></br>Les sushis se mettent au vert</h1>
              <p className="desc align_right text_justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              <br></br> <br></br> 
              Ut enim ad minim veniam, quis nostrud co laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure  do eiusmod tempor 
              incididunt ut labore et dolore
              </p>
            </div>
            <h1 className="categories alignRight">Les sushis de cette catégories</h1>

          </div>
        </div>

        <div className="menu_defilant">
          <img src={tapis_vert} alt="Menu défilant" />
          <img src={tapis_vert} alt="Menu défilant" />
        </div>

      </section>

    )
}

export default Section_asahona;