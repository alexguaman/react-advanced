import { ProductCard } from "../components";

import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || undefined}
          >
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white text-bold" />
              <ProductCard.Buttons
                className="custom-buttons"
                activeBtnClass="no-class"
              />
            </>
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.keys(shoppingCart).map((key) => (
          <ProductCard
            product={shoppingCart[key]}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={shoppingCart[key].count}
            onChange={onProductCountChange}
          >
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
