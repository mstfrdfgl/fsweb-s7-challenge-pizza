import React from "react";

export default function Kalinlik({ kalınlık, handleChange }) {
  return (
    <>
      <div className="kalınlık-form">
        <label className="bold">
          Hamur Seç <span className="zorunlu">*</span>
        </label>
        <div className="form-group">
          <select name="kalınlık" value={kalınlık} onChange={handleChange}>
            <option value="ince">İnce</option>
            <option value="normal">Normal</option>
            <option value="kalın">Kalın</option>
          </select>
        </div>
      </div>
    </>
  );
}
