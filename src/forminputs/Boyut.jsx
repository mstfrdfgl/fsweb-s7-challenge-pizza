import React from "react";

export default function Boyut({ boyut, handleChange }) {
  return (
    <>
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
    </>
  );
}
