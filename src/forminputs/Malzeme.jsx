import React from "react";

export default function Malzeme({ malzemeler, handleChange }) {
  return (
    <>
      <div className="form-malzemeler">
        <div className="malzemeler-form">
          <label className="bold">Ek Malzemeler</label>
          <label className="small">
            En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
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
    </>
  );
}
