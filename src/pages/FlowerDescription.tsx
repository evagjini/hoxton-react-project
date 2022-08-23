import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Flower = {
  id: number;
  price: number;
  instructions: string;
  photo: string;
  tittle: string;
  categoryId: number;
};

export function FlowerDescription() {
  const [flower, setFlower] = useState<Flower | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/flowers/${params.id}`)
      .then((resp) => resp.json())
      .then((flowerFromServer) => setFlower(flowerFromServer));
  }, []);

  if (flower === null) return <h2>Please Wait ....</h2>;
  return (
    <div>
      <img className="detail-photo" src={flower.photo} alt={flower.tittle} />
      <div className="flower-detail">
        <h3> {flower.tittle}</h3>
        <p>{flower.instructions}</p>
        <span>{flower.price}</span>
        <button className="basket-button">ADD To Basket</button>
      </div>
    </div>
  );
}
