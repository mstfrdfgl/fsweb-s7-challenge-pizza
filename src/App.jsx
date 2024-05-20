import React from "react";
import Anasayfa from "./pages/Anasayfa";
import SiparisFormSayfasi from "./pages/SiparisFormSayfasi";
import SiparisOnaySayfasi from "./pages/SiparisOnaySayfasi";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />{" "}
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Anasayfa} />
          <Route path="/siparis-form" component={SiparisFormSayfasi} />
          <Route path="/siparis-onay" component={SiparisOnaySayfasi} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
