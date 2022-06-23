import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
      <section class="input_section">
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='marg_l'>
       <center>
        <button
          onClick={() => removeTodo(todo.id)}
          className='delete-icon submit_delete'
        >Hapus</button>
        <button 
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon submit_update'
        >Update </button></center>
      </div>
    </div>
    </section>
  ));
};

export default Todo;