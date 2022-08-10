import news from "../img/footer_bg.png";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Newsletter(){
    return(
        <div className="newsletter">
        <img className="text-center" src={news} alt="a" />

        <div className="form-info">
          <h3>get our weekly update by subscribing to our newsletter</h3>
          <input type="text" /><input type="submit" defaultValue="Subscribe" />
        </div></div>
    )
}

export default Newsletter