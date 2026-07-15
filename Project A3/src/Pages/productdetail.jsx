import "../styles/productdetail.css";

const khussaCollection = [
  { id: 101, name: "Rose Khussa 🌹", price: 3800, image: "public/images/rosekhussa.jpeg"},
  { id: 102, name: "Tulip Khussa 🌷", price: 4200, image: "/images/tulipkhussa.jpeg" },
  { id: 103, name: "Wildflower Khussa 🌿", price: 4000, image: "/images/wildflowerkhussa.jpeg" },
];

function ProductDetail({ addToCart }) {
  return (
    <div className="container mt-5 pt-4">
      <h1 className="section-title text-pink mb-4">
        Khussa Collection
      </h1>

      <div className="row">
        {khussaCollection.map((p) => (
          <div key={p.id} className="col-md-4 mb-4 text-center">
            <div className="product-card border p-3">
              <img src={p.image} alt={p.name} className="img-fluid mb-2" />
              <h4>{p.name}</h4>
              <p className="fw-bold">Rs. {p.price}</p>
              <button
                className="btn btn-pink"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;