// Dependencies
import React from 'react';
import { HOC } from 'formsy-react';
import * as Semantic from 'semantic-ui-react'
import _ from 'underscore';

// JSON data
import genresList from 'data/genres.json';

/**
 * Genre dropdown class
 *
 * @extends React.Component
 */
class Genre extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
	 * @see https://facebook.github.io/react/docs/react-component.html#componentwillmount
	 */
    componentWillMount() {

        /**
         * Films genre list
         *
         * @type {Array}
         */
        // this.genres =  [
        //     {
        //         value   : 'Аниме',
        //         text    : 'Аниме'
        //     },
        //     {
        //         value   : 'Биографический',
        //         text    : 'Биографический'
        //     },
        //     {
        //         value   : 'Боевик',
        //         text    : 'Боевик'
        //     },
        //     {
        //         value   : 'Военный',
        //         text    : 'Военный'
        //     },
        // ];

        this.genres = [];

        _.each(genresList, label => {
            this.genres.push({
                value   : label,
                text    : label
            });
        })
    }

    /**
     * Fired, when changed value into select
     *
     * @param {Object} e Event
     */
    onChange(e, { value }) {
        this.props.setValue(value);
    }

    /**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		return (
			<div className="field">
                <label>Жанр</label>
                <Semantic.Dropdown
                    placeholder = "Жанр фильма"
                    value       = { this.props.getValue() }
                    fluid
                    selection
                    options     = { this.genres }
                    onChange    = { this.onChange.bind(this) }
                />
			</div>
		);
	}

}

export default HOC(Genre)
