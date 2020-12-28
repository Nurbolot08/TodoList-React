import React, {useState} from 'react';

const TodoListItem = ({todo, deleteTodo,updateTodo,doneTodo}) => {
    const [editable, setEditable] = useState(false)
    const [updated, setUpdated] = useState(todo.title)
    const handleSave = (id) =>{
        updateTodo(updated, id)
        setEditable(false)
    }
    const isDoneStyle = {
        textDecoration: 'line-through'
    }
    return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                { editable ? <input type="text" value={updated} onChange={e => setUpdated(e.target.value)}/> :
                <h4 style={todo.done ? isDoneStyle : null} onClick={() => doneTodo(todo.id)}>{todo.title}</h4>
                }
                <div>
                    <button
                        className="btn btn-warning mr-2"
                        onClick={() => editable ? handleSave(todo.id) : setEditable(true)}
                    >{ editable ? 'Save' : 'Edit' }</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(todo.id)}>
                        Del
                    </button>
                </div>
            </li>
    );
};

export default TodoListItem;