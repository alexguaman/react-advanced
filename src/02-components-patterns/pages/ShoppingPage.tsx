import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "1",
  title: "More Coffee",
  img: "./coffee-mug.png",
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
        <ProductCard product={product} className="bg-dark text-white">
          <>
            <ProductCard.Image className="custom-image"/>
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" activeBtnClass="no-class"/>
          </>
        </ProductCard>

        <ProductCard product={product2} className="bg-dark text-white">
          <>
            <ProductImage className="custom-image"/>
            <ProductTitle title="Super Cofee" className="text-white text-bold"/>
            <ProductButtons className="custom-buttons" activeBtnClass="no-class"/>
          </>
        </ProductCard>
      </div>
      <ProductCard product={product2} style={{backgroundColor: '#70D1F8'}}>
          <>
            <ProductImage style={{boxShadow: "0px 10px 5px gray"}}/>
            <ProductTitle style={{fontWeight: 'bold'}}/>
            <ProductButtons style={{display: "flex", justifyContent: "end"}}/>
          </>
        </ProductCard>
    </div>
  );
};

export default ShoppingPage;
