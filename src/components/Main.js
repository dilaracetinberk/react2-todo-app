import React from 'react'

function Main({todos, toggleItem, deleteItem}) {
  return (
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			{
				todos.map((todo)=> (
					<li className={todo.isCompleted ? 'completed' : null}>
				<div className="view">
					<input className="toggle" type="checkbox" 
					checked={todo.isCompleted}
					onChange={()=> toggleItem(todo.id)}/>
					<label property='text'>{todo.text}</label>
					<button className="destroy" onClick={()=> deleteItem(todo.id)}></button>
				</div>
			</li>
				))
			}
		</ul>
	</section>
  )
}

export default Main