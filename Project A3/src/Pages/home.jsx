import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="main-content-wrapper">
      <section className="hero">
        <h1>Where Tradition Meets Elegance</h1>
        <p>Handcrafted art, footwear & accessories that tell a story.</p>
      </section>

      <section className="about">
        <h2>About Hues by Momina</h2>
        <p>
          Inspired by Pakistan’s rich cultural heritage, <b>Hues by Momina</b> brings together
          artistry and craftsmanship. We specialize in hand-painted khusas and crochet keepsakes.
        </p>
      </section>

      <section className="featured">
        <h2>Our Main Categories</h2>
        <div className="product-gallery">
          <Link to="/productdetail" className="product">
            <img src="/images/khusa.jpeg" alt="Hand Painted Khusa" />
            <p>Hand Painted Khusa</p>
          </Link>

          <Link to="/crochetdetail" className="product">
            <img src="/images/crochet.jpeg" alt="Crochet Accessories" />
            <p>Crochet Accessories</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;