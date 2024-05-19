import React from "react";

export default function IsimSoyisim({ isimSoyisim, handleChange, isimValid }) {
  return (
    <>
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
          {!isimValid && <p style={{ color: "#ce2829" }}>En az 3 harf.</p>}
        </div>
      </div>
    </>
  );
}
