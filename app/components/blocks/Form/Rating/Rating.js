// Dependenies
import React from 'react';

/**
 * Rating class
 *
 * @extends React.Component
 */
class Rating extends React.Component {

    /**
     * @constructor
     * @param {Object} props Properties
     */
    constructor(props) {
        super(props);

        this.maxStars = this.props.stars || 5
    }

    /**
     * @see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     * @type {Object}
     */
    propTypes: {
        stars: React.PropTypes.string
    }

    /**
     * View
     */
	render() {
		return (
            <div className="field">
                <label>Рейтинг</label>
                <div className="ui massive star rating" data-rating="0" data-max-rating={ this.maxStars }></div>
            </div>
		);
	}

}

export default Rating
