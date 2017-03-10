// Dependencies
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';

// Blocks
import { Title, Rating, Genre, Year } from './blocks/';

/**
 * Table class
 */
class Form extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			canSubmit: false
		};
	}

	enableSubmit() {
		this.setState({
			canSubmit: true
		});
    }

	disableSubmit() {
		this.setState({
			canSubmit: false
		});
    }

	submit(data) {
		console.info(data)
	}

    /**
     * View
     */
	render() {
		return (
			<Formsy.Form className="ui form" onValidSubmit={ this.submit } onValid= { this.enableSubmit.bind(this) } onInvalid={ this.disableSubmit.bind(this) }>
                <h4 className="ui dividing header">Добавление фильма</h4>
				<Title
					name="title"
					validations={{
						isFilled: (values, value) => {
							if (typeof value != 'undefined') {
								return value.trim() != '' ? true : 'Введите название фильма';
							}
						}
					}}
					required
				/>
                <Genre />
                <Year from="1895" />
                <Rating stars="5" />
                <div className="field">
                    <button className="ui primary button submit" disabled={ !this.state.canSubmit }>Сохранить</button>
                </div>
                <div className="ui error message"></div>
            </Formsy.Form>
		);
	}

}

export default connect(
    state => ({
        films: state
    }),
    dispatch => ({
    })
)(Form)
