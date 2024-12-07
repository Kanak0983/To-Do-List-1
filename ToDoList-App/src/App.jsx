import React from "react";
import ToDo from "./components/ToDo";

const App = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-no-repeat bg-[url('/Users/rkhivekie/ToDoList-App/src/assets/BG-pink.png')] flex items-center justify-center">
      <ToDo />
    </div>
  );
};

export default App;
