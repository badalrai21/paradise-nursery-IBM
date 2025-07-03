import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">Paradise Nursery</h1>
        <p className="description">
          Welcome to Paradise Nursery — your one-stop destination for beautiful, affordable, and healthy houseplants. Brighten up your space with nature!
        </p>
        <button className="get-started" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
