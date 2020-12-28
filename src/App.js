import React from 'react'
import TodoList from "./components/TodoList";
import './app.css'

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <TodoList/>
            </div>
        </div>
    </div>
  );
}

export default App;
