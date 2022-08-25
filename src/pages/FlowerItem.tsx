import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Flower = {
  id: number;
  price: number;
  instructions: string;
  photo: string;
  tittle: string;
  categoryId: number;
};
export function FlowerItem() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5600/flowers?categoryId=${params.id}`)
      .then((resp) => resp.json())
      .then((flowersFromServer) => setFlowers(flowersFromServer));
  }, []);

  return (
    <div className="flowers-wraper">
      <ul className="flowers-list">
        {flowers.map((flower) => (
          <li>
            <Link to={`/flowers/${flower.id}`}>
              <article className="flower-item">
                <img src={flower.photo} alt={flower.tittle} />
                <h3 className="flower-title">{flower.tittle}</h3>
                <span className="price">£{flower.price.toFixed(2)}</span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
