// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Blocks
import Form from './blocks/Form/Form';
import Table from './blocks/Table/Table';

// Styles
import './App.styl';

/**
 * Application class
 */
class App extends React.Component {

	/**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		return (
			<div className="ui two column stackable grid container sixteen wide">
				<div className="column six wide">
					<Form />
				</div>
				<div className="column ten wide">
					<Table />
				</div>
			</div>
		);
	}

}

export default connect(
    state => ({
        films: state
    }),
    dispatch => ({

    })
)(App)
