import { ProductCard } from "../components";

import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({reset, count, increaseBy, maxCount, isMaxCountReached}) => (
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white text-bold" />
              <ProductCard.Buttons
                className="custom-buttons"
                activeBtnClass="no-class"
              />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              <button onClick={() => increaseBy(2)}>+2</button>
              <span>{count} - {maxCount} - {String(isMaxCountReached)}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
