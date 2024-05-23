import React, { useState } from "react";
import Anasayfa from "./pages/Anasayfa";
import SiparisFormSayfasi from "./pages/SiparisFormSayfasi";
import SiparisOnaySayfasi from "./pages/SiparisOnaySayfasi";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [siparis, setSiparis] = useState(null);
  return (
    <>
      <Header />
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Anasayfa} />
          <Route path="/siparis-form">
            <SiparisFormSayfasi setSiparis={setSiparis} />
          </Route>
          <Route path="/siparis-onay/:siparisId">
            <SiparisOnaySayfasi siparis={siparis} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
