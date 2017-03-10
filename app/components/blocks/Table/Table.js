// Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Blocks
import Row from './blocks/Row/Row';

/**
 * Table class
 */
class Table extends React.Component {

    /**
     * View
     */
	render() {
		return (
            <table className="ui celled padded table">
                <thead>
                    <tr>
                        <th className="center aligned">Название</th>
                        <th className="center aligned">Жанр</th>
                        <th className="center aligned">Год</th>
                        <th className="center aligned">Рейтинг</th>
                    </tr>
                </thead>
                <tbody>
					{
						this.props.films.map((film, i) => {
							return <Row key={ i } film={ film } />
						})
					}
                </tbody>
            </table>
		);
	}

}

export default connect(
    state => ({
        films: state
    }),
    dispatch => ({

    })
)(Table)
