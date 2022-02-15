const BackgroundImg = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        backgroundImage: "url(" + require("./light-bg.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default BackgroundImg;
