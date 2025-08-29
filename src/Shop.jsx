import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from './image/Rectangle 26.png'
import myImage1 from './image/Rectangle 27.png'
import myImage2 from './image/Rectangle 28.png'
import myImage3 from './image/Rectangle 29.png'
import myImage4 from './image/Rectangle 30.png'
import myImage5 from './image/Rectangle 31.png'
import myImage6 from './image/Rectangle 32.png'

// Dummy data for products
const products = [
  { id: 1, name: 'Modern sofa', image: myImage, price: 780, category: 'Ceiling', color: 'Black', rating: 4 },
  { id: 2, name: 'Modern sofa', image: myImage3, price: 713, category: 'Floor', color: 'Blue', rating: 5 },
  { id: 3, name: 'Modern sofa', image: myImage1, price: 200, category: 'Led', color: 'Red', rating: 3 },
  { id: 4, name: 'Modern sofa', image: myImage2, price: 890, category: 'Modern', color: 'Green', rating: 4 },
  { id: 5, name: 'Modern sofa', image: myImage4, price: 120, category: 'Retro', color: 'Yellow', rating: 5 },
  { id: 6, name: 'Modern sofa', image: myImage5, price: 231, category: 'Wood', color: 'Grey', rating: 2 },
  { id: 7, name: 'Modern sofa', image: myImage6, price: 444, category: 'Ceiling', color: 'Black', rating: 4 },
  { id: 8, name: 'Modern sofa', image: myImage, price: 103, category: 'Floor', color: 'Blue', rating: 5 },
  { id: 9, name: 'Modern sofa', image: myImage1, price: 450, category: 'Led', color: 'Red', rating: 3 },
  { id: 10, name: 'Modern sofa', image: myImage2, price: 740, category: 'Modern', color: 'Green', rating: 4 },
];

const categories = ['Ceiling', 'Floor', 'Led', 'Modern', 'Retro', 'Wood'];
const colors = ['Black', 'Blue', 'Red', 'Green', 'Yellow', 'Grey'];

const PRODUCTS_PER_PAGE = 9;

function Shop() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [price, setPrice] = useState(800);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesSearch =
      !search ||
      product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesColor = !selectedColor || product.color === selectedColor;
    const matchesPrice = product.price <= price;
    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

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
      <div className="shop-content">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="search-btn">
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
          <div className="filter-section">
            <h3>Category</h3>
            {categories.map(cat => (
              <div key={cat} className="filter-option">
                <label>
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={() => {
                      setSelectedCategory(cat);
                      setCurrentPage(1);
                    }}
                  />
                  {cat} (25)
                </label>
              </div>
            ))}
          </div>
          <div className="filter-section">
            <h3>Color</h3>
            {colors.map(col => (
              <div key={col} className="filter-option">
                <label>
                  <input
                    type="radio"
                    name="color"
                    value={col}
                    checked={selectedColor === col}
                    onChange={() => {
                      setSelectedColor(col);
                      setCurrentPage(1);
                    }}
                  />
                  {col} (25)
                </label>
              </div>
            ))}
          </div>
          <div className="filter-section">
            <h3>Price</h3>
            <div className="price-slider">
              <input
                type="range"
                min={4}
                max={800}
                value={price}
                onChange={e => {
                  setPrice(Number(e.target.value));
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="price-label">
              Price $4 - ${price}
            </div>
            <button className="filter-btn" onClick={() => setCurrentPage(1)}>Filter</button>
          </div>
        </aside>
        {/* Main Shop Grid */}
        <main className="shop-main">
          <div className="shop-header">
            <span>
              Showing {filteredProducts.length === 0 ? 0 : ((currentPage - 1) * PRODUCTS_PER_PAGE + 1)}
              –
              {Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)}
              of {filteredProducts.length} results
            </span>
            <select className="sort-select">
              <option>Sort by popularity</option>
              <option>Sort by rating</option>
              <option>Sort by price</option>
            </select>
          </div>
          <div className="products-grid">
            {paginatedProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-name">{product.name}</div>
                <div className="product-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: i < product.rating ? '#888' : '#ddd' }}>★</span>
                  ))}
                </div>
                <div className="product-price">${product.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i + 1}
                className={`page-num${currentPage === i + 1 ? ' active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
                style={{ cursor: 'pointer' }}
              >
                {i + 1}
              </span>
            ))}
            {currentPage < totalPages && (
              <span className="page-num" onClick={() => setCurrentPage(currentPage + 1)} style={{ cursor: 'pointer' }}>
                {'>'}
              </span>
            )}
            <span className="view-all" onClick={() => setCurrentPage(1)} style={{ cursor: 'pointer' }}>
              view all
            </span>
          </div>
        </main>
      </div>
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

export default Shop;