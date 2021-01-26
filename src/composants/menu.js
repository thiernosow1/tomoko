import Header from "./header"
import The_footer from "./footer"

import '../style/menu.css'

import plat_1 from "../img/plat_1.png"
import plat_2 from "../img/plat_2.png"
import plat_3 from "../img/plat_3.png"
import plat_4 from "../img/plat_4.png"

function Menu(){
    return(
        <div className="App">
            <Header/>
            <main className="main_menu" role="main">
                {/* SECTION KOI */}
                <section className="menu">
                    <div className="motif_koi">
                        <h1 className="titre">koi</h1>
                        <p className="descCategorie sous_titre">Les grands <br></br> classiques</p>
                        <p className="desc first_letter">3€ l'article
                        </p>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Sushi Go</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Miam Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Sushi Name</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Oh My Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Miam Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Sushi Name</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Sushi Go</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_koi">Oh My Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>

                    </div>
                    
                </section>

                {/* SECTION ASAHONA */}

                <section className="menu section_margin_top">
                    <div className="motif_asahona">
                        <h1 className="titre">Asahona</h1>
                        <p className="descCategorie sous_titre">0% viande <br></br> 100% goût</p>
                        <p className="desc first_letter">5€ l'article
                        </p>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Vegan Sushi</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Vegan Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Sushi Name</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Oh My Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Vegan Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Vegan Sushi</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Sushi Go</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_asahona">Vegan Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>

                    </div>
                    
                </section>

                {/* SECTION SEIGAIHA */}

                <section className="menu section_margin_top">
                    <div className="motif_seigaiha">
                        <h1 className="titre">Seigaiha</h1>
                        <p className="descCategorie sous_titre">Fabuleuse <br></br> innovation</p>
                        <p className="desc first_letter">7€ l'article
                        </p>
                    </div>
                    <div className="articles">
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Innov Sushi</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Improved Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Sushi Name</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Oh My Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">My Sushi</h1>
                            <img className="img_article" src={plat_2}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Sushi</h1>
                            <img className="img_article" src={plat_3}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Sushi Go</h1>
                            <img className="img_article" src={plat_1}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>
                        <div className="article">
                            <h1 className="nom_article nom_article_seigaiha">Sushi</h1>
                            <img className="img_article" src={plat_4}  alt="Sushi go"/>
                            <p className="desc desc_article">eiusmod tempor, dolore, magna aliqua</p>
                        </div>

                    </div>
                    
                </section>
            </main>

            <The_footer/>
        </div>
    )
}

export default Menu;