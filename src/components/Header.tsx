
import Image from "../assets/wishpay.avif";
import "./headers.css";
const Header = () => {
    return (
        <>
            <div id='main-header'>
                <div className='title'>
                    <img src={Image.toString()} alt="Wish Pay" />
                    <h2>Wishpay</h2>


                </div>

                <div className='mid-options'>
                    <p>People</p>
                    <p>Business</p>
                    <p>Enterprise</p>
                    <p>Developer</p>
                </div>

                <div className='right-options'>
                    <button>Login</button>
                    <button className='signup'>Sign Up</button>
                </div>

            </div>

        </>
    )
}

export default Header;
