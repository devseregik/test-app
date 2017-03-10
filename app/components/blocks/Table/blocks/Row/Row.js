// Dependencies
import React from 'react';
import { connect } from 'react-redux';

/**
 * Table class
 */
class Row extends React.Component {

    /**
     * View
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
                    <div className="ui star rating rating--disabled" data-rating={ this.props.film.rating } data-max-rating="5"></div>
                </td>
            </tr>
		);
	}

}

export default Row
