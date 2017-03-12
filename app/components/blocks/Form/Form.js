// Dependencies
import $ from 'jquery';
import React from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import * as Semantic from 'semantic-ui-react'

// Styles
import './Form.styl';

// Blocks
import  * as Fields from './blocks/';

// Constants
import Const from './constants';

/**
 * Form class
 *
 * @extends React.Component
 */
class Form extends React.Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		/**
		 * Local state
		 *
		 * @type {Object}
		 */
		this.state = {
			canSubmit	: false,
			rating		: Const.DEFAULT_RATING,
			submitted	: false
		};
	}

	/**
	 * @see https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.submitted) {
			this.setState({
				submitted: false
			});
		}

		return true;
	}

	/**
	 * Enabled submit, when the form is valid
	 */
	enableSubmit() {
		this.setState({
			canSubmit: true
		});
    }

	/**
	 * Disabled submit, while the form isn`t valid
	 */
	disableSubmit() {
		this.setState({
			canSubmit: false
		});
    }

	/**
	 * Submit form
	 *
	 * @param {Object} data Form data
	 */
	submit(data) {
		data.rating = this.state.rating;

		this.props.onSubmit(data);

		this.setState({
			submitted: true
		});

		this.titleInput.resetValue();
		this.genreSelect.setValue('');
		this.yearSelect.setValue('');
		this.setState({ rating: Const.DEFAULT_RATING });
	}

	/**
     * Fired, when your are changed the rating
     *
     * @param {Event} e
     * @param {Integer} rating Current value
     */
    onRate(e, { rating }) {
		this.setState({
			rating: rating
		});
    }

    /**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		return(
			<Formsy.Form
				className		= "ui form"
				onValidSubmit	= { this.submit.bind(this) }
				onValid			= { this.enableSubmit.bind(this) }
				onInvalid		= { this.disableSubmit.bind(this) }
			>
	            <h4 className="ui dividing header">Добавление фильма</h4>

				<Fields.Title
					name		= "title"
					type 		= "text"
					validations	= {{
						isFilled: (values, value) => {
							if (typeof value != 'undefined') {
								return value.trim() != '' ? true : 'Введите название фильма';
							}
						}
					}}
					ref	= { (input) => { this.titleInput = input; } }
					required
				/>

				<Fields.Genre
					name	= "genre"
					ref		= { (select) => { this.genreSelect = select; } }
					required
				/>

	            <Fields.Year
					name	= "year"
					ref		= { (select) => { this.yearSelect = select; } }
					from	= "1895"
					submitted = { this.state.submitted }
					required
				/>

				<div className="field rating">
	                <label className="rating__label">Рейтинг</label>
	                <Semantic.Rating
						className		= "rating__stars"
						icon			= "star"
						size			= "massive"
						rating			= { this.state.rating }
						maxRating		= { Const.MAX_RATING }
						onRate			= { this.onRate.bind(this) }
					/>
	            </div>
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
		onSubmit: payload => {
			dispatch({
				type	: Const.ADD_FILM,
				payload	: payload
			});
		}
    })
)(Form)
