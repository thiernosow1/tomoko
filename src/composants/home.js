import React from "react";
import '../style/App.css';

import Header from "./header"
import Banniere from "./banniere";
import Section_koi from "./section_koi"
import Section_asahona from "./section_asahona"
import Section_seigaiha from "./section_seigaiha"
import The_footer from "./footer"


function Home() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Banniere/>

        <Section_koi/>

        <Section_asahona/>
        
        <Section_seigaiha/>
      </main>

      <The_footer/>
      
    </div>
  );
}

export default Home;
