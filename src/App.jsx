
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; 

import backgroundImage from './image/pexels-eberhardgross-1624438.jpg'; 
import backgroundImage2 from './image/pp.jpg';
import myImage from './image/radium-LED-Essence-Standard-RL-A100-145W.jpg';
import myImage2 from './image/Rectangle 6.png'
import myImage3 from './image/Rectangle 5.png'
import myImage4 from './image/Rectangle 11.png'
import myImage5 from './image/Rectangle 13.png'
import myImage6 from './image/Rectangle 15.png'
import myImage7 from './image/Rectangle 19.png'
import myImage8 from './image/Rectangle 20.png'
import myImage9 from './image/wooden-nesting-tables-orange-brown .png';
import myImage10 from './image/white-desk-lamp-wooden-clock-minimalist .png';
 import axios from 'axios';

function App() {
  const navigate = useNavigate();

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="app">          
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">soudemy</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About us</a>
          <a href="/blog">Blog</a>
        </div>
          <div className="nav-icons">
      <button className="icon-btn"><span role="img" aria-label="search">🔍</span></button>
      <button className="icon-btn"><span role="img" aria-label="cart">🛒</span></button>
      <button className="icon-btn"><span role="img" aria-label="menu">☰</span></button>
    </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}></section>
      <section className="hero">
        <div className="hero-content">
          <h1>ALL FOR YOUR HOME</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Consequat dolor odio odio malesuada at condimentum<br />
            adipiscing faculis semper.
          </p>
          <button className="view-more-btn">View more</button>
        </div>
      </section>
    
      <section className="products-section">
        <div className="products-container">
          <h2>PRODUCTS OF THE WEEK</h2>
          <p className="products-description">
            Learn from edge of, remit, connectors with the right. Compound<br />
            door side each motion, and touch medium adjusting tactile<br />
            sensors.
          </p>
            
          <div className="products-grid">
            <div className="product-card">
              <img className='ampola' src={myImage3} alt="photo" />
              <h3>Full</h3>
              <p className="product-price">$ 500da</p>
            </div>
            <div className="product-card">
              <img className='ampola' src={myImage} alt="photo" />
              <h3>Lamp</h3>
              <p className="product-price">$ 200da</p>
            </div>
            <div className="product-card">
              <img className='ampola' src={myImage2} alt="photo" />
              <h3>Chain</h3>
              <p className="product-price">$ 252da</p>
            </div>
          </div>
          
        </div>
      </section>
      
      <section className='paja3'>
        <div className="text-section">
          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Consequat dolor odio odio malesuada at condimentum<br />
            adipiscing isculis semper.
          </p>
          <button className="view-more-btn">View more</button>
        </div>
      </section>

    <div className="products-container">
      {/* Stylish Chairs Section */}
      <section className="product-section chairs-section">
        <div className="product-content">
          <h2>STYLISH CHAIRS</h2>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Consequat dolor odio odio mattusadis ut condimentum adipiscing facilis semper.
          </p>
          <button className="view-more-btn">View more →</button>
        </div>
        <div className="product-image">
          <img className="ampola" src={myImage4} alt="Stylish chairs" />
        </div>
      </section>

      {/* Table Section */}
      <section className="product-section table-section">
        <div className="product-image">
          <img className="ampola" src={myImage9} alt="Table" />
        </div>
        <div className="product-content">
          <h2>TABLE</h2>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Consequat dolor odio odio mattusadis ut condimentum adipiscing facilis semper.
          </p>
          <button className="view-more-btn">View more →</button>
        </div>
      </section>

      {/* Contemporary Lamps Section */}
      <section className="product-section lamps-section">
        <div className="product-content">
          <h2>CONTEMPORARY LAMPS</h2>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Consequat dolor odio odio mattusadis ut condimentum adipiscing facilis semper.
          </p>
          <button className="view-more-btn">View more →</button>
        </div>
        <div className="product-image">
          <img className="ampola" src={myImage10} alt="Contemporary lamps" />
        </div>
      </section>

      <section className="paja5">
        <div className="order-now-section">
          <p className="order-text">order now for an express delivery in 24h!</p>
          <button className="view-more-btn">View more</button>
        </div>
      </section>
    </div>

      <div className="container">
        <div className="features">
          <div className="feature">
            <h2>Shape online</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Consequat dolor odio odio</p>
          </div>
          <div className="feature">
            <h2>Free shipping</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Consequat dolor odio odio</p>
          </div>
          <div className="feature">
            <h2>Return policy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Consequat dolor odio odio</p>
          </div>
          <div className="feature">
            <h2>PAYMENT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Consequat dolor odio odio</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="articles">
          <div className="article">
            <img className='aymi' src={myImage7} alt="photo" />
            <p className="date">29 sep,2022 / by soroush norozy</p>
            <h3>Your office should have only natural materials</h3>
            <button 
              className="read-more-btn"
              onClick={() => handleReadMore(1)}
            >
              read more
            </button>
          </div>
          <div className="article">
            <img className='aymi' src={myImage8} alt="photo" />
            <p className="date">29 sep,2022 / by soroush norozy</p>
            <h3>Your office should have only natural materials</h3>
            <button 
              className="read-more-btn"
              onClick={() => handleReadMore(2)}
            >
              read more
            </button>
            <div>
          
          <div className="pip-tout">
     
        <p className="prg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet.
        </p>
        <div className="mot">
          <p className="mot1">Soroush Norozy</p>
          <p className="mot2">Designer</p>
        </div>
      
    </div>
    
       
       
      
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
      </div>
      </div>
      </div>
      </div>
  );
}

export default App;