import React from 'react';
import './boxes.css';

const Boxes = () => {
  return (
    <div className="wishpay-container">
      <div className="content-wrapper">
      
        <div className="top-section">
          <div className="earn-rewards-card">
            <h2>Earn Rewards</h2>
            <p>It costs nothing to pay with PayPal, you'll only be charged a fee when you sell something or request a payment.</p>
            <div className="gift-box-container">
              <div className="gift-box">
                <div className="gift-box-lid"></div>
                <div className="gift-box-body"></div>
                <div className="gift-bow">
                  <div className="bow-left"></div>
                  <div className="bow-right"></div>
                  <div className="bow-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="always-protected-card">
            <h2>Always Protected</h2>
            <p>Shopping with Wishpay is safer with Buyer Protection, 24/7 anti-fraud monitoring and world class security.</p>
            <div className="request-money-section">
              <div className="request-header">
                <span>Request Money</span>
                <span>Split a Bill</span>
              </div>
              <div className="user-requests">
                <div className="user-request">
                  <div className="user-avatar jenny"></div>
                  <span className="user-name">Jenny Wilson</span>
                  <span className="amount">$3.00 USD</span>
                </div>
                <div className="user-request">
                  <div className="user-avatar jenna"></div>
                  <span className="user-name">Jenna Elfman</span>
                  <span className="amount">$3.00 USD</span>
                </div>
                <div className="check-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="bottom-section">
          <div className="no-volatility-card">
            <h2>No asset volatility</h2>
            <p>Generate returns on your cash reserves without making any investments.</p>
            <div className="chart-container">
              <div className="chart-header">
                <span>Summary</span>
                <select className="chart-period">
                  <option>6 Months</option>
                </select>
              </div>
              <div className="chart-amount">$1,876,580</div>
              <div className="chart-graph">
                <svg viewBox="0 0 400 100" className="chart-svg">
                  <path 
                    d="M 0 80 Q 50 75 100 70 T 200 60 T 300 50 T 400 40" 
                    stroke="#8b5cf6" 
                    strokeWidth="3" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="get-paid-faster-card">
            <h2>Get paid faster</h2>
            <p>Create flexible, scalable subscription plans and streamline billing.</p>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <span className="time">9:41</span>
                  <div className="phone-status">
                    <div className="signal-bars"></div>
                    <div className="wifi-icon"></div>
                    <div className="battery-icon"></div>
                  </div>
                </div>
                <div className="phone-content">
                  <div className="payment-user">Jenny Wilson</div>
                  <div className="payment-amount">$5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;