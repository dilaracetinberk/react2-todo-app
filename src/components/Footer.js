import React from 'react'

function Footer({count, onChange, filter, clearCompleted}) {
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{count} </strong>
			left
		</span>

		<ul className="filters">
			<li onClick={()=> onChange('all')}>
				<a href="#/" className={filter === 'all' ? 'selected' : ''}>All</a>
			</li>
			<li onClick={()=> onChange('active')}>
				<a href="#/" className={filter === 'active' ? 'selected' : ''}>Active</a>
			</li>
			<li onClick={()=> onChange('completed')}>
				<a href="#/" className={filter === 'completed' ? 'selected' : ''}>
					Completed
			    </a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
  )
}

export default Footer