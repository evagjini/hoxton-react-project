import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type Category = {
  id: number;
  name: string;
};
export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:5600/categories")
      .then((resp) => resp.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  });
  return (
    <div className="types-warpper">
      <ul className="types-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
