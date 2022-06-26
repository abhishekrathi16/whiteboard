import React from "react";

const Swatch = ({ setToolType }) => {
  return (
    <div style={{position: "absolute", right: "0px", top: "0px"}}>
      <div className="row">
        <div className="col-md-12">
          <div>
            <button
              title="Pencil"
              onClick={() => {
                setToolType("pencil");
              }}
            >
              Pencil
            </button>
            <button
              title="Line"
              onClick={() => {
                setToolType("line");
              }}
            >
              Line
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swatch;
