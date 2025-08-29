import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './image/Rectangle 47.png'
import myVideo from './video/3770017-hd_1920_1080_25fps.mp4';

function AboutUs() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
  };

  return (
    <div className="shop-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">soudemy</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="nav-icons">
          <button className="icon-btn"><span role="img" aria-label="search">🔍</span></button>
          <button className="icon-btn"><span role="img" aria-label="cart">🛒</span></button>
          <button className="icon-btn"><span role="img" aria-label="menu">☰</span></button>
        </div>
      </nav>
      {/* Main Content */}
      <main className="about-main">
        <div className="about-hero">
          <img className="aboutt" src={myImage} alt="photo aboutus" />
          <h1 className="about-hero-title">About us</h1>
        </div>
        <h1>About Us</h1>
        <p>
          Welcome to Soudemy!<br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Tellus vitae congue id ipsum sed neque et dui accumsan. 
          Nibh semper magna facilisi ridiculus luctus amet. Aliquam.
        </p>
        <h2><span className="typing-effect">Watch Our Video</span></h2>
        <video
          ref={videoRef}
          width="560"
          height="315"
          controls
          muted={false}
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={toggleMute} style={{margin: '16px 0', padding: '8px 16px'}}>
          {muted ? 'Activer le son' : 'Désactiver le son'}
        </button>
        <h2>Our Mission</h2>
        <p>
          To provide the best products for your home with fast delivery and excellent service.
        </p>
        <h2>Contact</h2>
        <p>
          Email: soudemy@example.com<br />
          Phone: +1 333 555
        </p>
      </main>

        
        <div className="functionality-section">
          <div className="functionality-left">
            <h1>
              Functionality<br />
              meets perfection
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa libero, mattis volutpat id. Egestas adipiscing placerat eleifend a nascetur. Mattis proin enim, nam porttitor vitae.
            </p>
          </div>
          <div className="functionality-right">
            <div className="progress-group">
              <div className="progress-label">
                <span>Creativity</span>
                <span>72 %</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '72%'}}></div>
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-label">
                <span>Advertising</span>
                <span>84 %</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '84%'}}></div>
              </div>
            </div>
            <div className="progress-group">
              <div className="progress-label">
                <span>Design</span>
                <span>72 %</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '72%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ...rest of your content... */}



      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h2 className="footer-title">Soudemy</h2>
            <h3 className="footer-subtitle">About Us</h3>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam
            </p>
          </div>
          <div className="footer-column">
            <h3 className="footer-subtitle">Useful</h3>
            <p className="footer-link">Download product</p>
            <p className="footer-link">Download product</p>
            <p className="footer-link">Download product</p>
            <p className="footer-link">Download product</p>
            <p className="footer-link">Download product</p>
            <p className="footer-link">Download product</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-subtitle">Download</h3>
            <a className="footer-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
            <a className="footer-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">facebook</a>
            <a className="footer-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="footer-link" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">pinterest</a>
            <a className="footer-link" href="https://youtube.com" target="_blank" rel="noopener noreferrer">youtube</a>
          </div>
          <div className="footer-column">
            <h3 className="footer-subtitle">Call Center</h3>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae
            </p>
            <p className="footer-link">soroushnorozyui@gmail.com</p>
            <p className="footer-link">+1333 555</p>
          </div>
        </div>
      </footer>
       </div>
  );
}

export default AboutUs;