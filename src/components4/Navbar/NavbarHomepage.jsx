import './Navbar.css'; // Import your CSS file for styling

// Functional component for the Navbar
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
