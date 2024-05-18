import React from "react";

export default function Adet({
  adet,
  adetArttir,
  adetAzalt,
  malzemeFiyati,
  fiyat,
}) {
  return (
    <>
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
          <p className="malzeme-fiyat">Ek Malzemeler: {malzemeFiyati} ₺</p>
          <p className="toplam-fiyat zorunlu">Toplam Fiyat: {fiyat} ₺</p>
        </div>
      </div>
    </>
  );
}
