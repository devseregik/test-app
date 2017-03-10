// Dependencies
import React, { Component, PropTypes } from 'react';

// Styles
import './Rating.styl';

/**
 * Rating class
 *
 * @extends React.Component
 */
class Rating extends Component {

    /**
     * @constructor
     * @param {Object} props Properties
     */
    constructor(props) {
        super(props);

        /**
         * Default max stars count
         *
         * @const
         * @type {Number}
         */
        const DEFAULT_STARS = 5;

        this.maxStars = this.props.stars || DEFAULT_STARS
    }

    /**
     * @see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     * @type {Object}
     */
    propTypes: {
        stars: PropTypes.string
    }

    /**
     * View
     */
	render() {
		return (
            <div className="field rating">
                <label className="rating__label">Рейтинг</label>
                <div className="rating__stars ui massive star rating" data-rating="1" data-max-rating={ this.maxStars }></div>
            </div>
		);
	}

}

export default Rating
