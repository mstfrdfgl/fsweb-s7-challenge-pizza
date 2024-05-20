import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Boyut from "../forminputs/Boyut";
import Kalinlik from "../forminputs/Kalinlik";
import Malzeme from "../forminputs/Malzeme";
import IsimSoyisim from "../forminputs/IsimSoyisim";
import Not from "../forminputs/Not";
import Adet from "../forminputs/Adet";

export default function SiparisFormSayfasi() {
  const [formData, setFormData] = useState({
    boyut: "orta",
    kalınlık: "normal",
    malzemeler: {
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
    },
    not: "",
    fiyat: 85,
    adet: 1,
    isimSoyisim: "",
    isimValid: false,
    malzemeFiyati: 20,
  });

  const history = useHistory();

  const adetArttir = (event) => {
    event.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      adet: prevState.adet + 1,
    }));
  };

  const adetAzalt = (event) => {
    event.preventDefault();
    if (formData.adet > 1) {
      setFormData((prevState) => ({
        ...prevState,
        adet: prevState.adet - 1,
      }));
    }
  };

  useEffect(() => {
    let yeniFiyat = 85;
    if (formData.boyut === "küçük") {
      yeniFiyat -= 15;
    } else if (formData.boyut === "büyük") {
      yeniFiyat += 15;
    }
    yeniFiyat += formData.malzemeFiyati;
    yeniFiyat *= formData.adet;
    setFormData((prevState) => ({
      ...prevState,
      fiyat: yeniFiyat,
    }));
  }, [formData.adet, formData.boyut, formData.malzemeFiyati]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "radio" && name === "boyut") {
      setFormData((prevState) => ({
        ...prevState,
        boyut: value,
      }));
    } else if (type === "select-one" && name === "kalınlık") {
      setFormData((prevState) => ({
        ...prevState,
        kalınlık: value,
      }));
    } else if (type === "checkbox") {
      const seciliMalzemeler = {
        ...formData.malzemeler,
        [name]: checked,
      };
      const malzemeSayisi =
        Object.values(seciliMalzemeler).filter(Boolean).length;
      if (malzemeSayisi >= 4 && malzemeSayisi <= 10) {
        setFormData((prevState) => ({
          ...prevState,
          malzemeler: seciliMalzemeler,
          malzemeFiyati: malzemeSayisi * 5,
        }));
      }
    } else if (name === "not") {
      setFormData((prevState) => ({
        ...prevState,
        not: value,
      }));
    } else if (name === "isimSoyisim") {
      setFormData((prevState) => ({
        ...prevState,
        isimSoyisim: value,
        isimValid: value.trim().length >= 3,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const {
      boyut,
      kalınlık,
      malzemeler,
      not,
      fiyat,
      adet,
      isimSoyisim,
      malzemeFiyati,
    } = formData;

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
              <span className="bold">{formData.fiyat} ₺</span>
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
              <Boyut boyut={formData.boyut} handleChange={handleChange} />
              <Kalinlik
                kalınlık={formData.kalınlık}
                handleChange={handleChange}
              />
            </div>
            <Malzeme
              malzemeler={formData.malzemeler}
              handleChange={handleChange}
            />
            <IsimSoyisim
              isimSoyisim={formData.isimSoyisim}
              handleChange={handleChange}
              isimValid={formData.isimValid}
            />
            <Not not={formData.not} handleChange={handleChange} />
            <Adet
              adet={formData.adet}
              adetArttir={adetArttir}
              adetAzalt={adetAzalt}
              malzemeFiyati={formData.malzemeFiyati}
              fiyat={formData.fiyat}
            />
            <button disabled={!formData.isimValid}>Sipariş Ver</button>
            <Link
              to={{
                pathname: "/siparis-onay",
                state: {
                  siparisId: null,
                  siparis: {
                    boyut: formData.boyut,
                    kalınlık: formData.kalınlık,
                    malzemeler: formData.malzemeler,
                    not: formData.not,
                    fiyat: formData.fiyat,
                    adet: formData.adet,
                    isimSoyisim: formData.isimSoyisim,
                    malzemeFiyati: formData.malzemeFiyati,
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
