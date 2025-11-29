import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingPage.css';
import logoImg from '../assets/QBox logo png.png';

function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-page">
      <div className="onboarding-content">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logoImg} alt="QBox Logo" className="logo-img" />
          <h1 className="app-name">QBox</h1>
        </div>

        {/* Tagline */}
        <div className="tagline-section">
          <h2 className="tagline">Ask Freely, Learn Better</h2>
          <p className="subtitle">
            Anonymous Q&A platform for interactive classroom sessions
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-container">
        <button 
          className="primary-button"
          onClick={() => navigate('/join-room')}
        >
          Join Room
        </button>
        
        <button 
          className="outline-button"
          onClick={() => navigate('/login')}
        >
          Create Room
        </button>

        <p className="footer-text">
          Create a room if you're an instructor, or join an existing room to ask questions
        </p>
      </div>
    </div>
  );
}

export default OnboardingPage;
