import react, { useEffect, useState } from "react";
import SiparisFormSayfasi from "./pages/SiparisFormSayfasi";
import "./App.css";
import Anasayfa from "./pages/Anasayfa";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Anasayfa} />
          <Route path="/siparis" component={SiparisFormSayfasi} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
