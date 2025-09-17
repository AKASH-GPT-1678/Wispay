import Header from './components/Header';
import './App.css'
import HeroSection from './components/HeroSection';
import RewardsOffers from './components/RewardsOffers';
import WishpayIntegration from './components/WishIntegration';

function App() {
  // you can remove state if not needed


  return (
    <>
     <div>
      <div>
      <Header/>
      </div>
      <HeroSection/>
      <div>
        <RewardsOffers/>
      </div>
      <div>

        <WishpayIntegration/>
      </div>


     </div>
    </>
  );
}

export default App;

