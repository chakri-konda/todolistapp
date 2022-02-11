const BackgroundImg = (props) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + require("./light-bg.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default BackgroundImg;
