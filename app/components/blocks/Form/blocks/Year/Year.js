// Dependencies
import React from 'react';
import _ from 'underscore';

/**
 * Year dropdown class
 *
 * @extends React.Component
 */
class Year extends React.Component {

    /**
     * @constructor
     * @param {Object} props Properties
     */
    constructor(props) {
        super(props);
    }

    /**
     * @see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     * @type {Object}
     */
    propTypes: {
        from: React.PropTypes.string.isRequired
    }

    /**
     * View
     */
	render() {
        const fromYear = Number(this.props.from)

		return (
			<div className="field">
				<label>Год</label>
				<select className="ui dropdown" name="year">
                    <option value="">Год выхода</option>
					{
                        _.range(fromYear, new Date().getFullYear() + 1).reverse().map((label, i) => {
                            return <option key={ i }>{ label }</option>
                        })
                    }
				</select>
			</div>
		);
	}

}

export default Year
