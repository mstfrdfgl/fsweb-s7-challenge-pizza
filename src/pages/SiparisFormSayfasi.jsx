import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";
import { SectionContainer } from "../components/Styled";

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
      setIsimValid(value.trim() !== "");
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
              <div className="boyut-form">
                <label className="boyut-label bold">
                  Boyut Seç <span className="zorunlu">*</span>
                </label>
                <div className="radios">
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="küçük"
                        name="boyut"
                        checked={boyut === "küçük"}
                        onChange={handleChange}
                      />
                      Küçük
                    </label>
                  </div>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="orta"
                        name="boyut"
                        checked={boyut === "orta"}
                        onChange={handleChange}
                      />
                      Orta
                    </label>
                  </div>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        value="büyük"
                        name="boyut"
                        checked={boyut === "büyük"}
                        onChange={handleChange}
                      />
                      Büyük
                    </label>
                  </div>
                </div>
              </div>
              <div className="kalınlık-form">
                <label className="bold">
                  Hamur Seç <span className="zorunlu">*</span>
                </label>
                <div className="form-group">
                  <select
                    name="kalınlık"
                    value={kalınlık}
                    onChange={handleChange}
                  >
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-malzemeler">
              <div className="malzemeler-form">
                <label className="bold">Ek Malzemeler</label>
                <label className="small">
                  En az 4,en fazla 10 malzeme seçebilirsiniz. 5₺
                </label>
              </div>
              <div className="malzemeler">
                {Object.entries(malzemeler).map(([malzeme, secildi]) => (
                  <div key={malzeme} className="form-group malzeme">
                    <label className="malzeme-label">
                      <input
                        type="checkbox"
                        name={malzeme}
                        checked={secildi}
                        onChange={handleChange}
                      />
                      {malzeme}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-isim-soyisim">
              <div className="isim-soyisim-form">
                <label htmlFor="isimSoyisim" className="bold">
                  İsim Soyisim:
                </label>
                <input
                  type="text"
                  id="isimSoyisim"
                  name="isimSoyisim"
                  placeholder="İsim ve Soyisim Giriniz"
                  value={isimSoyisim}
                  onChange={handleChange}
                />
                {!isimValid && (
                  <p style={{ color: "#ce2829" }}>Lütfen isim giriniz.</p>
                )}
              </div>
            </div>
            <div className="form-not">
              <div className="not-form">
                <label htmlFor="not" className="not-label bold">
                  Sipariş Notu
                </label>
                <textarea
                  id="not"
                  name="not"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  rows="4"
                  cols="50"
                  value={not}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-adet">
              <div className="adet-buton">
                <button className="azalt" onClick={adetAzalt}>
                  -
                </button>
                <span className="adet">{adet}</span>
                <button className="arttir" onClick={adetArttir}>
                  +
                </button>
              </div>
              <div className="fiyat-bilgi">
                <p className="malzeme-fiyat">
                  Ek Malzemeler: {malzemeFiyati} ₺
                </p>
                <p className="toplam-fiyat zorunlu">Toplam Fiyat: {fiyat} ₺</p>
              </div>
            </div>
            <button disabled={!isimSoyisim.trim()}>Sipariş Ver</button>
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
