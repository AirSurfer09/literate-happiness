import React from "react";
interface IIntialScreen {
  onClick: () => void;
}

export const InitialScreen = (props: IIntialScreen) => {
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url("/images/newsletter1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    ></div>
  );
};
