import "./Title.css";
import saitamaProfile from "./saitama.png";

const Title = (props) => {
  return (
    <div className="title">
      <div className="title-text">{props.title}</div>
      <div>
        <img
          className="title-profile-img"
          src={saitamaProfile}
          alt="profile pic"
        ></img>
      </div>
    </div>
  );
};

export default Title;
