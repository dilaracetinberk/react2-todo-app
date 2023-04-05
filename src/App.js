import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {
  
  const [todos, setTodos] = useState([]);

  const addTodoItem = (text) => { 
    setTodos([...todos,
    {
     id: uuidv4(),
     text,
     isCompleted: false
    }
  ])
}

const toggleItem = (id) => {
  const findTodo = todos.find((todo)=> todo.id === id);
  findTodo.isCompleted = !findTodo.isCompleted;
  setTodos(todos.map((todo)=> (todo.id === id ? findTodo : todo)))

}

const deleteTodoItem = (id)=> {
  setTodos(todos.filter((todo)=> todo.id !== id ))
}

  return (
    <>
     <div className="todoapp">
       <Header addItem={addTodoItem} />
       <Main todos={todos} toggleItem={toggleItem} deleteItem={deleteTodoItem}/>
       <Footer />
     </div>
       <Footer2 />
    </>
  );
}

export default App;
