import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Todo } from "./Components/Todo";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todo />}>
        <Route index element={<Todo />} />
      </Route>
     
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
