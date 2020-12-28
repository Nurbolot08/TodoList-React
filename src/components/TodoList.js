import React, {useEffect,useState} from 'react';
import TodoTitle from "./TodoTitle";
import tasks from "../tasks";
import TodoListItem from "./TodoListItem";
import shortId from 'shortid'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    useEffect(() => {
       setTodos(tasks)
    },[])
    const addTodo = () => {
        const addedTodo = {
            id:shortId.generate(),
            title:newTodo,
            done:false
        }
        setTodos([...todos,addedTodo])
        setNewTodo('')
    }
    const deleteTodo = (deletedId) => {
        const besides = todos.filter((el) => deletedId !== el.id)
        setTodos(besides)
    }
    const updateTodo  = (update,id) => {
        const updatedTodos = todos.map(el => el.id === id ? {...el, title: update} : el)
        setTodos(updatedTodos)
    }
    const doneTodo  = (id) => {
        const doneTodos = todos.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTodos(doneTodos)
    }

    return (
        <div className="section">
            <TodoTitle todos={ todos }/>
            <ul className="list-group mb-5">
                {
                    todos.map( todo => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                            doneTodo={doneTodo}
                        />
                    ))
                }
            </ul>
            <input type="text"
                   className="form-control"
                   onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
            />
            <button className="btn btn-secondary w-100 mt-2"
                    onClick={addTodo}
                    disabled={newTodo.length < 5}
            >Add task</button>
        </div>
    );
};

export default TodoList;