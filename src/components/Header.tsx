import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="flower-logo">Pink Petals</div>
      </Link>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/flowers"> All Flowers </Link>
          </li>

          <li>
            <Link to="/categories">Types of Flowers</Link>
          </li>

          <li>
            <Link to="basket"> Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
