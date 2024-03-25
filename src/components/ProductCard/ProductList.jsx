const Productlist = ({ id, title, image, price }) => {
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
      </div>
      <img src={image} alt={title} />
      <div>
        <h2 className="card_over">{title}</h2>
      </div>
    </div>
  );
};
export default Productlist;
