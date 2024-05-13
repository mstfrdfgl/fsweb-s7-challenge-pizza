import react, { useState } from "react";
import "./App.css";

function App() {
  const [boyut, setBoyut] = useState("");
  const [kalınlık, setKalınlık] = useState("");
  const [malzemeler, setMalzemeler] = useState({
    Pepperoni: false,
    Sosis: false,
    "Kanada Jambonu": false,
    "Tavuk Izgara": false,
    Soğan: false,
    Domates: false,
    Mısır: false,
    Sucuk: false,
    Jalapeno: false,
    Sarımsak: false,
    Biber: false,
    Ananas: false,
    Kabak: false,
  });
  const [not, setNot] = useState("");
  const [fiyat, setFiyat] = useState(85.5);
  const [adet, setAdet] = useState(1);
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
  function handleBoyutChange(event) {
    setBoyut(event.target.value);
  }
  function handleKalınlıkChange(event) {
    setKalınlık(event.target.value);
  }
  function handleMalzemeChange(event) {
    const { name, checked } = event.target;
    const seciliMalzemeler = { ...malzemeler, [name]: checked };
    const malzemeSayisi =
      Object.values(seciliMalzemeler).filter(Boolean).length;
    if (malzemeSayisi <= 10) {
      setMalzemeler(seciliMalzemeler);
    }
  }
  function handleNotChange(event) {
    setNot(event.target.value);
  }
  return (
    <>
      <header>
        <div className="header-container">
          <h1>Teknolojik Yemekler</h1>
          <div>path</div>
        </div>
      </header>
      <section>
        <div className="section-container">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="bilgi">
            <span>{fiyat} ₺</span>
            <span>(yıldız)</span>
            <span>yorum sayısı</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            fuga quis impedit laborum accusamus nemo culpa minus suscipit
            aliquid eius dolor similique, perspiciatis numquam excepturi
            distinctio odio veritatis doloremque quos?
          </p>
          <form>
            <div className="form-boyut-kalınlık">
              <div className="boyut-form">
                <label className="boyut-label">
                  Boyut Seç <span className="zorunlu">*</span>
                </label>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      value="küçük"
                      name="boyut"
                      checked={boyut === "küçük"}
                      onChange={handleBoyutChange}
                    />
                    Küçük
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      value="orta"
                      name="boyut"
                      checked={boyut === "orta"}
                      onChange={handleBoyutChange}
                    />
                    Orta
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      value="büyük"
                      name="boyut"
                      checked={boyut === "büyük"}
                      onChange={handleBoyutChange}
                    />
                    Büyük
                  </label>
                </div>
              </div>
              <div className="kalınlık-form">
                <label>
                  Hamur Seç <span className="zorunlu">*</span>
                </label>
                <div className="form-group">
                  <select value={kalınlık} onChange={handleKalınlıkChange}>
                    <option value="">Seçiniz</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-malzemeler">
              <div className="malzemeler-form">
                <label>Ek Malzemeler</label>
                <label className="small">
                  En fazla 10 malzeme seçebilirsiniz. 5₺
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
                        onChange={handleMalzemeChange}
                      />
                      {malzeme}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-not">
              <div className="not-form">
                <label htmlFor="not" className="not-label">
                  Sipariş Notu
                </label>
                <textarea
                  id="not"
                  name="not"
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  rows="4"
                  cols="50"
                  onChange={handleNotChange}
                ></textarea>
              </div>
            </div>
            <div className="form-adet">
              <button className="azalt" onClick={adetAzalt}>
                -
              </button>
              <span className="adet">{adet}</span>
              <button className="arttir" onClick={adetArttir}>
                +
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
