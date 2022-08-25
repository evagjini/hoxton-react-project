import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export function Header() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:5600/categories")
      .then((resp) => resp.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  });

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
            {/* <Link to="/categories">  */}
            Types of Flowers
            {/* </Link> */}
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="basket"> Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
