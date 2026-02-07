import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'How Modern Tools Are Revolutionizing Indian Agriculture',
    summary: 'Explore how new-age farming equipment is transforming traditional agriculture and increasing productivity.',
    image: '/images/CarouselImage/newimg/GreenResoltion.png',
  },
  {
    id: 2,
    title: 'Top 5 Crops to Grow for Maximum Profit in 2025',
    summary: 'A detailed guide on the most profitable crops based on demand, climate, and market trends.',
    image: '/images/CarouselImage/newimg/GreenResoltion.png',
  },
  {
    id: 3,
    title: 'Organic Farming: Benefits & Practical Tips for Beginners',
    summary: 'Understand the basics of organic farming and how to get started with limited investment.',
    image: '/images/CarouselImage/newimg/GreenResoltion.png',
  },
];

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <header className="blog-hero">
        <div className="overlay">
          <h1>Latest from Our Blog</h1>
          <p>Fresh insights, agri tips & technology trends — tailored for Indian farmers.</p>
        </div>
      </header>

      <section className="blog-section">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
