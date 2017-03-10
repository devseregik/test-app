// Dependencies
import React from 'react';
import Formsy from 'formsy-react';

const Title = React.createClass({

    mixins: [Formsy.Mixin],

    /**
     * Change value into input
     *
     * @param {Object} e Event
     */
    onChange(e) {
        this.setValue(e.target.value.trim());
    },

    /**
     * View
     */
	render() {
		return (
            <div className={ this.getErrorMessage() ? 'field error' : 'field' }>
                <label>Название фильма</label>
                <input
                    type        = "text"
                    name        = { this.props.name }
                    placeholder = "Название фильма"
                    onChange    = { this.onChange }

                />
                <div>{ this.getErrorMessage() }</div>
            </div>
		);
	}

});

export default Title
