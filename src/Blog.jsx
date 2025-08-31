import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myImage from './image/Rectangle 57.png'
import myImage2 from './image/Rectangle 56.png'
import myImage3 from './image/Rectangle 47.png'

const posts = [
  {
    id: 1,
    title: "New modern sofa is here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus libero, mauris vehicula ut ligula molestie placerat eleifend a mauris. Nullam quis ante, Fusce dui tellus, cursus ut, iaculis ut, volutpat nec, mauris.",
    image: myImage,
    date: "May 15, 2023",
    author: "Interior design",
    type: "sofa",
  },
  {
    id: 2,
    title: "New modern sofa is here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus libero, mauris vehicula ut ligula molestie placerat eleifend a mauris. Nullam quis ante, Fusce dui tellus, cursus ut, iaculis ut, volutpat nec, mauris.",
    image:myImage2 ,
    date: "May 15, 2023",  
    author: "Interior design",
    type: "sofa",
  },
  {
    id: 3,
    title: "New modern sofa is here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus libero, mauris vehicula ut ligula molestie placerat eleifend a mauris. Nullam quis ante, Fusce dui tellus, cursus ut, iaculis ut, volutpat nec, mauris.",
    image: myImage3 ,
    date: "May 15, 2023",
    author: "Interior design",
    type: "sofa",
  },
];

const categories = [
  { name: "Ceiling", number: 20 },
  { name: "Chair", number: 15 },
  { name: "Last", number: 20 },
  { name: "Random", number: 24 },
  { name: "Sofa", number: 30 },
  { name: "Wood", number: 24 },
];

// CommentSection Component
const CommentSection = ({ postId = 'default' }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    content: '',
    name: '',
    email: '',
    website: ''
  });

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://node-tutorial-3h9y.onrender.com/api/comments?postId=${postId}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        // Fallback to localStorage if backend fails
        const storedComments = localStorage.getItem(`blog-comments-${postId}`);
        if (storedComments) {
          setComments(JSON.parse(storedComments));
        }
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      // Fallback to localStorage
      const storedComments = localStorage.getItem(`blog-comments-${postId}`);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToSave = {
      ...newComment,
      postId: postId,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://node-tutorial-3h9y.onrender.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentToSave),
      });

      if (response.ok) {
        // Successfully saved to backend
        fetchComments(); // Refresh comments
      } else {
        // If backend fails, save to localStorage
        throw new Error('Backend not available');
      }
    } catch (error) {
      console.error('Error posting to backend, saving to localStorage:', error);
      // Fallback to localStorage
      const storedComments = localStorage.getItem(`blog-comments-${postId}`) || '[]';
      const commentsArray = JSON.parse(storedComments);
      commentToSave.id = Date.now(); // Add unique ID for localStorage
      commentsArray.push(commentToSave);
      localStorage.setItem(`blog-comments-${postId}`, JSON.stringify(commentsArray));
      setComments([...comments, commentToSave]);
    }

    // Clear form
    setNewComment({
      content: '',
      name: '',
      email: '',
      website: ''
    });
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      
      <div className="post-comment">
        <h3>Post a comment</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="content">Your comment</label>
            <textarea
              id="content"
              name="content"
              value={newComment.content}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newComment.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="website">Website (optional)</label>
            <input
              type="url"
              id="website"
              name="website"
              value={newComment.website}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="comments-list">
        <h3>Comments ({comments.length})</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id || comment._id} className="comment">
              <p className="comment-content">{comment.content}</p>
              <p className="comment-author">
                By {comment.name} 
                {comment.website ? (
                  <a href={comment.website} target="_blank" rel="noopener noreferrer">
                    ({comment.website})
                  </a>
                ) : null}
              </p>
              <p className="comment-date">{new Date(comment.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

function Blog() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullPost, setShowFullPost] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const filteredPosts = posts.filter(
    (post) =>
      post.type.toLowerCase().includes(searchText.toLowerCase()) ||
      post.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  function handleReadMore(postId) {
    setSelectedPostId(postId);
    setShowFullPost(true);
  }

  function handleBack() {
    setShowFullPost(false);
    setSelectedPostId(null);
  }

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  function handleCategoryClick(categoryName) {
    setSearchText(categoryName.toLowerCase());
  }

  if (showFullPost && selectedPostId) {
    const post = posts.find((p) => p.id === selectedPostId);

    return (
      <div className="blog-main">
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
        
        <div className="page">
          <div className="header">
            <h1 className="site-title">{post.title}</h1>
            <button className="back-button" onClick={handleBack}>
              ← Back to posts
            </button>
          </div>

          <div className="full-post">
            <img className="full-post-image" src={post.image || "/placeholder.svg"} alt={post.title} />
            <h1 className="full-post-title">{post.title}</h1>
            <div className="post-info">
              {post.date} • By {post.author}
            </div>
            <p className="full-post-text">{post.text}</p>
            <p className="full-post-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            {/* Comment Section for Full Post View - Pass postId */}
            <CommentSection postId={post.id} />
          </div>
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

  return (
    <div className="blog-main">
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
      
      <div className="page">
        {/* Header */}
        <div className="header">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="main-content">
          {/* Posts Section */}
          <div className="posts-section">
            {filteredPosts.map((post) => (
              <div key={post.id} className="post">
                <img className="post-image" src={post.image || "/placeholder.svg"} alt={post.title} />
                <div className="post-info">
                  {post.date} • {post.author} • By {post.author}
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-text">{post.text}</p>
                <button className="read-more-button" onClick={() => handleReadMore(post.id)}>
                  Read more →
                </button>
              </div>
            ))}

            {/* Page Numbers */}
            <div className="page-numbers">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pageNum) => (
                <button
                  key={pageNum}
                  className={currentPage === pageNum ? "page-number active" : "page-number"}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Featured Image */}
            <div className="sidebar-section">
              <img className="featured-image" src="/modern-beige-sofa.png" alt="Featured" />
              <h3 className="sidebar-title">Lorem ipsum dolor sit amet, consectetur</h3>
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida ante lorem, et dignissim mauris
                volutpat ut.
              </p>
            </div>

            {/* Categories */}
            <div className="sidebar-section">
              <h3 className="sidebar-heading">Category</h3>
              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="category-link"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name} ({category.number})
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="sidebar-section">
              <h3 className="sidebar-heading">Recent post</h3>
              <div className="recent-posts">
                <button className="recent-post-link">Lorem ipsum dolor sit amet, consectetur</button>
                <button className="recent-post-link">Lorem ipsum dolor sit amet, consectetur</button>
                <button className="recent-post-link">Lorem ipsum dolor sit amet, consectetur</button>
              </div>
            </div>

            {/* Tags */}
            <div className="sidebar-section">
              <h3 className="sidebar-heading">Tags</h3>
              <div className="tags">
                <button className="tag" onClick={() => setSearchText("sofa")}>
                  sofa
                </button>
                <button className="tag" onClick={() => setSearchText("chair")}>
                  chair
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comment Section - Use default postId for main page */}
        <CommentSection postId="default" />
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

export default Blog;