import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ borderRadius: props.borderRadius }}>
      {props.children}
    </div>
  );
};

export default Card;
