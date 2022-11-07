import news from "../img/footer_bg.png";
import React from "react";

function Newsletter() {
  return (
    <div className="wrap">
      <div className="newsletter rel">
        <img className="text-center rel" src={news} alt="a" />
        <div className="form-info container-fluid">
          <h3 className="desktop">get our weekly update by subscribing to our newsletter</h3>
          <h6 className="mobile ">get our weekly update by subscribing to our newsletter</h6>
          <div className="mx-5">  <input type="text" className="" /><input type="submit" value="Subscribe" /></div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter