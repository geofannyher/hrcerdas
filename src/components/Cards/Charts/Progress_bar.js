import React from "react";

const Progressbar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "auto",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 2,
    color: "#52525b",
    fontWeight: 700,
    textAlign: "center",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress} %`}</span>
      </div>
    </div>
  );
};

export default Progressbar;
