import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
