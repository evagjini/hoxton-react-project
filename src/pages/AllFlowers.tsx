import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    fetch("http://localhost:5000/flowers")
      .then((resp) => resp.json())
      .then((flowersFromServer) => setFlowers(flowersFromServer));
  }, []);

  return (
    <div className="flowers-wraper">
      <ul className="flowers-list">
        {flowers.map((flower) => (
          <li>
            <Link to={`/flowers/${flower.id}`}>
              <div className="flower-item">
                <img src={flower.photo} width={250} alt={flower.tittle} />
                <h3>{flower.tittle}</h3>
                <span>{flower.price}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
