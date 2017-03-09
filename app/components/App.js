// Dependenies
import React from 'react';

// Blocks
import { Genre, Year, Rating } from './blocks/Form/Form';

/**
 * Application class
 */
class App extends React.Component {

    /**
     * View
     */
	render() {
		return (
			<div className="ui two column stackable grid container">
				<div className="column">
			  		<div className="">
					<form className="ui form">
						<h4 className="ui dividing header">Добавление фильма</h4>
						<div className="field">
							<label>Название фильма</label>
							<input type="text" placeholder="Название фильма" />
						</div>
						<Genre />
						<Year from="1895" />
						<Rating stars="5" />
					</form>
			  		</div>
				</div>
				<div className="column">
			  		<div className="">1</div>
				</div>
			</div>
		);
	}

}

export default App;
