import React from 'react'

function Main() {
  return (
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			<li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li>
		</ul>
	</section>
  )
}

export default Main