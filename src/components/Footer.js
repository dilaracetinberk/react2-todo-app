import React from 'react'

function Footer() {
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>2 </strong>
			left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className="selected">All</a>
			</li>
			<li>
				<a href="#/" className="selected">Active</a>
			</li>
			<li>
				<a href="#/" className="selected">Completed</a>
			</li>
		</ul>

		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
  )
}

export default Footer