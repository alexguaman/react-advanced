import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from "../components";

const product = {
  id: "1",
  title: "Coffee",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "1",
  title: "More Coffee",
};

const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        </ProductCard>

        <ProductCard product={product2}>
          <>
            <ProductImage />
            <ProductTitle title="Super Cofee"/>
            <ProductButtons />
          </>
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
