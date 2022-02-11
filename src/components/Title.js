import "./Title.css";
import saitamaProfile from "./saitama.png";

const Title = () => {
  return (
    <div className="title">
      <div className="title-text">Saitama's Todo List</div>
      <img
        src={saitamaProfile}
        className="title-profile-img"
        alt="profile pic"
      ></img>
    </div>
  );
};

export default Title;
