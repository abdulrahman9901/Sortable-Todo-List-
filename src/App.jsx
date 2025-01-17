import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './assets/styles/App.css'
import MainContainer from "./components/MainContainer";

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <MainContainer />
  </DndProvider>
);

export default App;
