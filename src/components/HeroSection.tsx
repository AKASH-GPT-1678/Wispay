
import "./hero.css";
import DiamongSvg from "../assets/diamond-large-round.png";
import AppleIcon from "../assets/apple.png";
import Wishpay from "../assets/wishpay.avif";
import React from "react";
const HeroSection = () => {


  React.useEffect(() => {
    function setCardPosition() {
      const card = document.getElementById("middle-section") as HTMLDivElement | null;
      if (card) {
        card.style.position = "static";
      }
    }


    setTimeout(setCardPosition, 3000);

  }, []);

  return (
    <div id="super-container">
      <div id="main-container" className="mt-10">

        {/* Left Section */}
        <div id="left-section">
          <img src={DiamongSvg.toString()} alt="Diamond" id="purple" />
          <img src={AppleIcon.toString()} alt="Coin" id="coin" />
        </div>

        {/* Middle Section */}
        <div id="middle-section">
        <img src="https://res.cloudinary.com/dffepahvl/image/upload/v1758059314/vx4efxxpiijs5padexnu.png" alt="bank-card" id="bank-card" />
          <h1>
            <span id="enhance">Enhance</span>
            <span>
              <img src={Wishpay.toString()} alt="icons" className="h-[50px] w-[50px]" id="wish" />
            </span>
            <span id="your">Your</span>
            <br />

  
            <span id="finance" style={{ display: 'flex', width: '100%', justifyContent: "center" }}>



              Financials
            </span>




            <span>with Wishpay</span>
          </h1>
        </div>


        <div id="right-section" className="max-w-[300px]">
          <img src={DiamongSvg.toString()} alt="Diamond" id="blue" />
        </div>
      </div>


      <div className="hero-bottom">
        <p>
          Moving money should never take more than few <br />
          taps. Transfers are always free between friends
        </p>
        <button id="send-button">Send Money Now</button>
      </div>


      <div className="stats-container">
        <div className="stat">
          <p className="stat-number">75K+</p>
          <p className="stat-label">Satisfied users globally</p>

        </div>
        <div className="logos">
          <img src="https://1000logos.net/wp-content/uploads/2024/07/OpenAI-Logo-2022.png" alt="OpenAI" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRrf_EZ0AKLn8XHzM5o-B-rPk1GVneGnkKA&s" alt="Raycast" />
          <img src="https://wingassistant.com/wp-content/uploads/2022/07/ramp-logo.png" alt="Ramp" />
        </div>

        <div className="stat">
          <p className="stat-number">92%</p>
          <p className="stat-label">Beneficial User Cashback</p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
