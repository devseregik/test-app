// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import * as Semantic from 'semantic-ui-react'

/**
 * Table row class
 *
 * @extends React.Component
 */
class Row extends React.Component {

	/**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		return (
            <tr>
                <td className="left aligned">
                    { this.props.film.title }
                </td>
                <td className="center aligned single line">
                    { this.props.film.genre }
                </td>
                <td className="center aligned">
                    { this.props.film.year }
                </td>
                <td className="center aligned">
					<Semantic.Rating
						className		= "rating__stars"
						icon			= "star"
						rating			= { this.props.film.rating }
						maxRating		= { 5 }
						disabled
					/>
                </td>
            </tr>
		);
	}

}

export default Row
