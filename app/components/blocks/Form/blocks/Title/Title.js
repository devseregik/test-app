// Dependencies
import React from 'react';
import { HOC } from 'formsy-react';

/**
 * Title class
 *
 * @extends React.Component
 */
class Title extends React.Component {

    /**
     * Fired, when changed value into input
     *
     * @param {Event} e
     */
    onChange(e) {
        this.props.setValue(e.target.value.trim());
    }

    /**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
        const errorClassName = this.props.getErrorMessage() ? 'error' : '';

		return (
            <div className={ 'field ' + errorClassName }>
                <label>Название фильма</label>
                <input
                    type            = { this.props.type }
                    value           = { this.props.getValue() || '' }
                    name            = { this.props.name }
                    placeholder     = "Название фильма"
                    onChange        = { this.onChange.bind(this) }
                />
            <div className="field__error">{ this.props.getErrorMessage() }</div>
            </div>
		);
	}
}

export default HOC(Title)
