import React from "react";
import "./Placeorder.css";

const Placeorder = () => {
  return (
    <div className="place-order">
      <div>
        <h2 className="delevery-details-title">Edit Delevery Details</h2>
        <form autoComplete="off" className="shipping-form">
          <input type="text" name="Address" placeholder="Address" required />
          <input
            type="text"
            name="Road, Zip code"
            placeholder="Road, Zip code"
            required
          />
          <input
            type="text"
            name="Road, Zip code"
            placeholder="Road, Zip code"
            required
          />
          <input
            type="text"
            name="Business Nam"
            placeholder="Business Nam"
            required
          />
          <textarea
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Add delevery instruction"
          />
          <input
            type="submit"
            name="submit"
            className="form-submit"
            value="Save & Continue"
          />
        </form>
      </div>
    </div>
  );
};

export default Placeorder;
