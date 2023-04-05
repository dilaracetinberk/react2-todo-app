import React, {useState} from 'react'

function Header({addItem}) {

	const [word, setWord] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		addItem(word);
		setWord('')
	}
  
  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={submitForm}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus
			value={word} 
			onChange={(e)=> setWord(e.target.value)}/>
		</form>
	</header>
  )
}

export default Header