// Dependencies
import React from 'react';
import * as Semantic from 'semantic-ui-react'

/**
 * Table row class
 *
 * @extends React.Component
 */
class RowEmpty extends React.Component {

	/**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		return (
            <tr>
                <td className="center aligned" colSpan="4">
                    <span className="text--empty">{ this.props.bySearch ? 'По запросу ничего не найдено' : 'Список пуст' }</span>
                </td>
            </tr>
		);
	}

}

export default RowEmpty
