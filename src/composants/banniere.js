import React from "react";
import '../style/banniere.css'

import bigLogo from "../img/bigLogo.png";
import plat_rouge from "../img/plat_rouge.png"
import plat_vert from "../img/plat_vert.png"
import plat_bleu from "../img/plat_bleu.png"

function Banniere(){
    return(
        <section className="banniere">
            <div className="left">
                <div className="photoBanniere">
                    <img src={bigLogo} className="picture" alt="logo"/>
                </div>
            </div>
        <div className="right">
            <div className="accroche">
                <h1 className="titre align_right">Mixer, partager, Savourer <br></br> C'est possible avec Tomoko</h1>
                <p className="desc align_right text_justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud co laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure </p>
            </div>
            <div className="plat">
                <h1 className="categories align_right">3 catégories à votre service</h1>
                <div className="plats">
                <span className="plat1">
                    <img src={plat_rouge} alt="le plat Koi"/>
                    <h1 className="nomDeCategorie">KOI</h1>
                    <p className="descCategorie">les grands <br></br> classiques</p>
                </span>
                <span className="plat2">
                    <img src={plat_vert} alt="le plat Asahona"/>
                    <h1 className="nomDeCategorie">Asahona</h1>
                    <p className="descCategorie">0 viande <br></br>100% gout</p>
                </span>
                <span className="plat3">
                    <img src={plat_bleu} alt="le plat Seigaiha"/>
                    <h1 className="nomDeCategorie">Seigaiha</h1>
                    <p className="descCategorie">Fabuleuse <br></br> innovation</p>
                </span>
                </div>

            </div>
        </div>
        </section>
    )
}

export default Banniere;