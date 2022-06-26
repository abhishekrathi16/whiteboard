import React from "react";
import Whiteboard from "./components/Whiteboard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidepanel from "./components/Sidepanel";
import "./App.css";

const App = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Sidepanel/>
          <Whiteboard />
        </div>
      </DndProvider>
    </>
  );
};

export default App;
