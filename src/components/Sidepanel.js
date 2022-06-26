import React from "react";
import shm from "../images/shm.png";
import shm2 from "../images/shm2.jpeg";
import shm3 from "../images/shm3.png";
import shm4 from "../images/shm4.png";
import Picture from "./Picture";

const PictureList = [
  {
    id: 1,
    comp: shm,
  },
  {
    id: 2,
    comp: shm2,
  },
  {
    id: 3,
    comp: shm3,
  },
  {
    id: 4,
    comp: shm4,
  },
];

const Sidepanel = () => {
  return (
    <div
      style={{
        width: "380px",
        height: "auto",
        border: "2px solid black",
        borderTop:'none',
        borderBottom:"none",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        alignContent:"center"
      }}
    >
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture id={picture.id} comp={picture.comp} />;
        })}
      </div>
    </div>
  );
};

export default Sidepanel;
