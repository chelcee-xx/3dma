import news from "../img/footer_bg.png";
import React from "react";

function Newsletter(){
    return(
      <div className="wrap">
        <div className="newsletter">
        <img className="text-center" src={news} alt="a" />

        <div className="form-info">
          <h3>get our weekly update by subscribing to our newsletter</h3>
          <input type="text" /><input type="submit" defaultValue="Subscribe" />
        </div></div>L</div>
    )
}

export default Newsletter