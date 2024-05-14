import react, { useEffect, useState } from "react";
import Anasayfa from "./pages/Anasayfa";
import SiparisFormSayfasi from "./pages/SiparisFormSayfasi";
import SiparisOnaySayfasi from "./pages/SiparisOnaySayfasi";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Anasayfa} />
          <Route path="/siparis-form" component={SiparisFormSayfasi} />
          <Route path="/siparis-onay" component={SiparisOnaySayfasi} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
