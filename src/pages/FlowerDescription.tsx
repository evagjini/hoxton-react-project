import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    fetch(`http://localhost:5600/flowers/${params.id}`)
      .then((resp) => resp.json())
      .then((flowerFromServer) => setFlower(flowerFromServer));
  });

  const navigate = useNavigate();

  if (flower === null) return <h2>Please Wait ....</h2>;
  return (
    <div className="flower-container-description">
      <div className="single-flower">
        <img className="detail-photo" src={flower.photo} alt={flower.tittle} />
      </div>

      <div className="flower-detail">
        <h3 className="title"> {flower.tittle}</h3>
        <p>{flower.instructions}</p>
        <span>£{flower.price.toFixed(2)}</span>
        <button
          className="basket-button"
          onClick={() => {
            // se if the itm already exist in tha basket
            fetch(`http://localhost:5600/basket?flowerId=${flower.id}`)
              .then((resp) => resp.json())
              .then((data) => {
                if (data.length === 0) {
                  fetch(`http://localhost:5600/basket`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ flowerId: flower.id, amount: 1 }),
                  });
                } else {
                  fetch(`http://localhost:5600/basket/${data[0].id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: data[0].amount + 1 }),
                  });
                }
              })
              .then(() => {
                navigate("/basket");
              });
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
