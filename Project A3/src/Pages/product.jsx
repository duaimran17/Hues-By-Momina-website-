import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const products = [
  {
    id: 1,
    name: "Hand Painted Khussa",
    image: "/images/khusa.jpeg",
    link: "/productdetail",
  },
  {
    id: 2,
    name: "Crochet Stuff",
    image: "/images/crochet.jpeg",
    link: "/crochetdetail",
  },
];

function Product() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="section-title">Shop by Category</h1>

      <div className="row g-4 justify-content-center">
        {products.map((p) => (
          <div key={p.id} className="col-md-5">
            <div className="product-card p-3 text-center">
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h5 className="mt-3">{p.name}</h5>
              <Link to={p.link} className="btn btn-pink w-100">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
