import React from 'react';
import '../Components/home.css'

const Home = () => {
  return (
  <div class="about-container">
    <h1>Welcome to <span class="highlight">AITH Library</span>! 📚✨</h1>
    <p>Your one-stop destination for seamless library management!</p>
    <div class="features">
      <p>Our Library Management System is designed to make borrowing, returning, and managing books effortless.</p>
      <ul>
        <li><strong>Easy Book Search:</strong> Find your favorite books in seconds.</li>
        <li><strong>Real-Time Updates:</strong> Stay updated with availability and due dates.</li>
        <li><strong>User-Friendly Interface:</strong> Simplified for all users.</li>
      </ul>
      <p>Discover how technology meets literature and helps build an organized reading space for everyone.</p>
      <p><strong>Dive into the world of books with us—where management meets passion!</strong></p>
    </div>
  </div>
  );
}

export default Home;
