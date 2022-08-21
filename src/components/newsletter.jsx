import news from "../img/footer_bg.png";
import React from "react";

function Newsletter(){
    return(
      <div className="wrap">
        <div className="newsletter">
        <img className="text-center" src={news} alt="a" />

        <div className="form-info">
          <h3 className="desktop">get our weekly update by subscribing to our newsletter</h3>
          <h4 className="mobile">get our weekly update by <br/>subscribing to our newsletter</h4>
        <div className="mx-5">  <input type="text" /><input type="submit" value="Subscribe" /></div>
        </div></div></div>
    )
}

export default Newsletter