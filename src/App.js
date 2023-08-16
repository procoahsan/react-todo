import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Todo } from "./Components/Todo";
import { Practice } from "./Components/Practice";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todo />}>
        <Route index element={<Todo />} />
      </Route>
     <Route path='/apipractice'  element={<Practice />} />
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
