
import "./hero.css";
import DiamongSvg from "../assets/diamond-large-round.png";
import AppleIcon from "../assets/apple.png";
import Walleticon from "../assets/wallet.png";
import Wishpay from "../assets/wishpay.avif";
const HeroSection = () => {
  return (
    <div id='main-container' className='mt-10'>

      <div id="left-section" >
        <img src={DiamongSvg.toString()} alt="Diamond" id='purple' />
        <img src={AppleIcon.toString()} alt="Coin" id='coin' />





      </div>
      <div id="middle-section" >
        <h1>
          <span id="enhance">
            Enhance

          </span>
          <span><img src={Wishpay.toString()} alt="icons" className="h-[50px] w-[50px]" id="wish" /></span>  <span id="your">Your</span>
          <br />


          <span id="finance">Financials with Wishpay</span>
        </h1>

      </div>


      <div className=" max-w-[300px]" id="right-section" >
        <img src={DiamongSvg.toString()} alt="Diamond" id="blue" />





      </div>

    </div>
  )
}

export default HeroSection
