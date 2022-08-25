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
    fetch("http://localhost:5600/basket?_expand=flower")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function getTotal() {
    let total = 0;
    for (let product of basket) {
      total += product.amount * product.flower.price;
    }
    return total;
  }

  return (
    <div className="basket-wraper">
      <h3> Your Basket </h3>
      <ul>
        {basket.map((product) => (
          <li>
            <article className="basket-wraper-list">
              <img
                src={product.flower.photo}
                alt={product.flower.tittle}
                width="50"
              />
              <p>{product.flower.tittle}</p>
              <p>
                Amn:
                <select
                  value={product.amount}
                  onChange={(event) => {
                    const newAmount = Number(event.target.value);

                    if (newAmount === 0) {
                      let basketCopy = basket.filter(
                        (target) => target.id !== product.id
                      );

                      fetch(`http://localhost:5600/basket/${product.id}`, {
                        method: "DELETE",
                      });

                      setBasket(basketCopy);
                    } else {
                      let basketCopy: BasketProduct[] = structuredClone(basket);

                      const match = basketCopy.find(
                        (target) => target.id === product.id
                      );
                      if (!match) return;
                      match.amount = newAmount;
                      fetch(`http://localhost:5600/basket/${match.id}`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ amount: newAmount }),
                      });
                      setBasket(basketCopy);
                    }
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
              <p className="total">
                Total:£{(product.flower.price * product.amount).toFixed(2)}
              </p>
            </article>
          </li>
        ))}
      </ul>
      <h2>Total is:{getTotal().toFixed(2)}</h2>
    </div>
  );
}
