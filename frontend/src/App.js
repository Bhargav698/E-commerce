import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import WalletDisplay from './components/WalletDisplay/WalletDisplay';

const sampleProductInStock = {
  name: "Professional Drone",
  price: 980.00,
  cuttedPrice: 1200.00,
  images: [
      { url: "https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4837-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" },
      { url: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2070&auto=format&fit=crop" }
  ],
  stock: 10,
};

const sampleProductOutOfStock = {
  name: "Classic Leather Watch",
  price: 350.00,
  cuttedPrice: 400.00,
  images: [
    { url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop" },
    { url: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=2070&auto=format&fit=crop" }
  ],
  stock: 0,
};


function App() {
  return (
    <div className="App">
      <WalletDisplay />
      <div className="product-grid">
        <ProductCard product={sampleProductInStock} />
        <ProductCard product={sampleProductOutOfStock} />
      </div>
    </div>
  );
}

export default App;
