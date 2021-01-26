import '../style/koi.css'
import '../style/seigaiha.css'

import main_sushi from "../img/main_sushi.png"
import tapis_bleu from "../img/tapis_bleu.png"

function Section_seigaiha(){
    return(
        <section className="global seigaiha">
        <div className="seigaiha koi">
          <div className="seigaiha_left">
            <div className="margin_bottom">
              <h1 className="titre align_left chivo_black">Seigaiha <br></br>luxe et modernisme</h1>
              <p className="desc align_left text_justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip <br></br> <br></br>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              </p>
            </div>
            <h1 className="categories alignLeft">Les sushis de cette catégories</h1>

          </div>

          <div className="seigaiha_right">
            <div className="couverture_seigaiha">
              <img src={main_sushi} alt="Un saumon"/>
              <p>Paprika Temakis <br></br>
              Votre nouveau snack préféré !
              </p>
            </div>
            
          </div>
        </div>

        <div className="menu_defilant">
          <img src={tapis_bleu} alt="Menu défilant" />
          <img src={tapis_bleu} alt="Menu défilant" />
        </div>

      </section>
    )
}

export default Section_seigaiha;