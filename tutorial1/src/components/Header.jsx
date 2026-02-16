import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MyWebsite</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
