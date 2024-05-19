import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";
import { SectionContainer } from "../components/Styled";
import Boyut from "../forminputs/Boyut";
import Kalinlik from "../forminputs/Kalinlik";
import Malzeme from "../forminputs/Malzeme";
import IsimSoyisim from "../forminputs/IsimSoyisim";
import Not from "../forminputs/Not";
import Adet from "../forminputs/Adet";
export default function SiparisFormSayfasi() {
  const [boyut, setBoyut] = useState("orta");
  const [kalınlık, setKalınlık] = useState("normal");
  const [malzemeler, setMalzemeler] = useState({
    Pepperoni: true,
    Sosis: false,
    "Kanada Jambonu": false,
    "Tavuk Izgara": false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalapeno: true,
    Sarımsak: true,
    Biber: true,
    Ananas: false,
    Kabak: false,
  });
  const [not, setNot] = useState("");
  const [fiyat, setFiyat] = useState(85);
  const [adet, setAdet] = useState(1);
  const [isimSoyisim, setIsimSoyisim] = useState("");
  const [isimValid, setIsimValid] = useState(false);
  const [siparisId, setSiparisId] = useState(null);
  const [siparisTarih, setSiparisTarih] = useState("");
  const history = useHistory();
  const adetArttir = (event) => {
    event.preventDefault();
    setAdet(adet + 1);
  };
  const adetAzalt = (event) => {
    event.preventDefault();
    if (adet > 1) {
      setAdet(adet - 1);
    }
  };
  const malzemeFiyati = Object.values(malzemeler).filter(Boolean).length * 5;
  useEffect(() => {
    let yeniFiyat = 85;
    if (boyut === "küçük") {
      yeniFiyat -= 15;
    } else if (boyut === "büyük") {
      yeniFiyat += 15;
    }
    yeniFiyat += malzemeFiyati;
    yeniFiyat *= adet;
    setFiyat(yeniFiyat);
  }, [adet, boyut, malzemeler, malzemeFiyati]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "radio" && name === "boyut") {
      setBoyut(value);
    } else if (type === "select-one" && name === "kalınlık") {
      setKalınlık(value);
    } else if (type === "checkbox") {
      const seciliMalzemeler = { ...malzemeler, [name]: checked };
      const malzemeSayisi =
        Object.values(seciliMalzemeler).filter(Boolean).length;
      if (malzemeSayisi >= 4 && malzemeSayisi <= 10) {
        setMalzemeler(seciliMalzemeler);
      }
    } else if (name === "not") {
      setNot(value);
    } else if (name === "isimSoyisim") {
      setIsimSoyisim(value);
      setIsimValid(value.trim().length >= 3);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const siparis = {
      boyut,
      kalınlık,
      malzemeler,
      not,
      fiyat,
      adet,
      isimSoyisim,
      malzemeFiyati,
    };

    axios
      .post("https://reqres.in/api/pizza", siparis)
      .then((res) => {
        console.log("Yanıt:", res.data);
        history.push({
          pathname: "siparis-onay",
          state: { siparisId: res.data.id, siparis },
        });
      })
      .catch((err) => {
        console.error("Hata:", err.response.data);
      });
  }
  return (
    <>
      <section>
        <div className="section-container">
          <img
            src="../../Assets/mile2-aseets/pictures/form-banner.png"
            alt="pizza"
          />
          <div className="info">
            <h2>Position Absolute Acı Pizza</h2>
            <div className="bilgi">
              <span className="bold">{fiyat} ₺</span>
              <span>4.9</span>
              <span>(1907)</span>
            </div>
            <p className="small">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              fuga quis impedit laborum accusamus nemo culpa minus suscipit
              aliquid eius dolor similique, perspiciatis numquam excepturi
              distinctio odio veritatis doloremque quos?
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-boyut-kalınlık">
              <Boyut boyut={boyut} handleChange={handleChange} />
              <Kalinlik kalınlık={kalınlık} handleChange={handleChange} />
            </div>
            <Malzeme malzemeler={malzemeler} handleChange={handleChange} />
            <IsimSoyisim
              isimSoyisim={isimSoyisim}
              handleChange={handleChange}
              isimValid={isimValid}
            />
            <Not not={not} handleChange={handleChange} />
            <Adet
              adet={adet}
              adetArttir={adetArttir}
              adetAzalt={adetAzalt}
              malzemeFiyati={malzemeFiyati}
              fiyat={fiyat}
            />
            <button disabled={!isimValid}>Sipariş Ver</button>
            <Link
              to={{
                pathname: "/siparis-onay",
                state: {
                  siparisId: null,
                  siparis: {
                    boyut,
                    kalınlık,
                    malzemeler,
                    not,
                    fiyat,
                    adet,
                    isimSoyisim,
                    malzemeFiyati,
                  },
                },
              }}
            ></Link>
          </form>
        </div>
      </section>
    </>
  );
}
