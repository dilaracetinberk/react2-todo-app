import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {
  
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');


  /* add new todo items */
  const addTodoItem = (text) => { 
    setTodos([...todos,
    {
     id: uuidv4(),
     text,
     isCompleted: false
    }
  ])
}

/* toggle switch */
const toggleItem = (id) => {
  const findTodo = todos.find((todo)=> todo.id === id);
  findTodo.isCompleted = !findTodo.isCompleted;
  setTodos(todos.map((todo)=> (todo.id === id ? findTodo : todo)))

}
/* to delete todo items */
const deleteTodoItem = (id)=> {
  setTodos(todos.filter((todo)=> todo.id !== id ))
}
/* count how many todo items left */
const completedLength = todos.filter(todo => !todo.isCompleted).length;

/* change the category filter */
const changeFilter = (filter) => setFilter(filter);

/* render todos according to filter */
const visibleTodos = todos.filter((todo) => {
  return filter === 'active' ? !todo.isCompleted : filter === 'completed' ? todo.isCompleted : todo ;
})

/* clear completed todo items */
const clearCompletedTodos = ()=> setTodos(todos.filter((todo)=> !todo.isCompleted))

  return (
    <>
     <div className="todoapp">
       <Header addItem={addTodoItem} />
       <Main todos={visibleTodos} toggleItem={toggleItem} deleteItem={deleteTodoItem}/>
       <Footer count={completedLength} onChange={changeFilter} filter={filter} clearCompleted={clearCompletedTodos}/>
     </div>
       <Footer2 />
    </>
  );
}

export default App;
