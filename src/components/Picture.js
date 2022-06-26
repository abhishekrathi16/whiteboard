import React from "react";
import Draggable from 'react-draggable';

const Picture = ({ id, comp }) => {
  return (
    <Draggable handle=".handle">
    <img
      src={comp}
      id={id}
      className="handle"
      alt=""
      style={{ width:"340px",height:"230px",margin:"10px", border:"2px solid black" }}
    />
    </Draggable>
  );
};

export default Picture;
