import { CDN_PIC } from "../utils/constants";

const ProductCard = (props) => {
  const { resData } = props;
  const { name, cuisines, rating, timeToDelivery, priceForTwo } = resData;

  return (
    <div className="product-card">
      <img
        className="product-img"
        src={CDN_PIC}
      />
      <h4>{name}</h4>
      <h5>{cuisines}</h5>
      <h5>{rating}</h5>
      <h5>{timeToDelivery}</h5>
      <h5>₹ {priceForTwo} FOR TWO</h5>
    </div>
  );
};

export default ProductCard;