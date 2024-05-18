import React from "react";

export default function Not({ not, handleChange }) {
  return (
    <>
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
    </>
  );
}
