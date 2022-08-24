import { useEffect, useState } from "react";

type Flower = {
  id: number;
  price: number;
  instructions: string;
  photo: string;
  tittle: string;
  categoryId: number;
};

type BasketProduct = {
  id: number;
  flowerId: number;
  amount: number;
  flower: Flower;
};
export function Basket() {
  const [basket, setBasket] = useState<BasketProduct[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/basket?_expand=flower")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function updateAmoun() {}
  let total = 0;
  for (let product of basket) {
    total += product.amount * product.flower.price;
  }

  return (
    <div className="basket-wraper">
      <h3> Show Us your Flowers </h3>
      <ul>
        {basket.map((product) => (
          <li>
            <article className="basket-wraper-list">
              <img
                src={product.flower.photo}
                alt={product.flower.tittle}
                width="50"
              />
              <p>{product.flower.instructions}</p>
              <p>
                Amn:
                <select
                  value={product.amount}
                  onChange={(event) => {
                    console.log(Number(event.target.value));
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
              <p>Total:${(product.flower.price * product.amount).toFixed(2)}</p>
            </article>
          </li>
        ))}
      </ul>
      <h2>Total is:{total.toFixed(2)}</h2>
    </div>
  );
}
