import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

type Flower = {
  id: number;
  price: number;
  instructions: string;
  photo: string;
  tittle: string;
  categoryId: number;
};

export function AllFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5600/flowers")
      .then((resp) => resp.json())
      .then((flowersFromServer) => setFlowers(flowersFromServer));
  }, []);

  const filteredFlowers = flowers.filter((flower) =>
    flower.tittle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <div className="flowers-wraper">
        <ul className="flowers-list">
          {filteredFlowers.map((flower) => (
            <li>
              <Link to={`/flowers/${flower.id}`}>
                <article className="flower-item">
                  <img
                    className="all-flowers"
                    src={flower.photo}
                    alt={flower.tittle}
                  />
                  <h3 className="flower-title">{flower.tittle}</h3>
                  <span className="price">£{flower.price.toFixed(2)}</span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
