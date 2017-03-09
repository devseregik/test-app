// Dependenies
import React from 'react';

/**
 * Genre dropdown class
 */
class Genre extends React.Component {

    constructor() {
        super();

        this.genres = [
            'Аниме',
            'Биографический',
            'Боевик',
            'Вестерн',
            'Военный',
            'Детектив',
            'Детский',
            'Документальный',
            'Драма'
        ];
    }

    /**
     * View
     */
	render() {
		return (
			<div className="field">
				<label>Жанр</label>
				<select className="ui dropdown">
					{
                        this.genres.map((label, i) => {
                            return <option key={ i }>{ label }</option>
                        })
                    }
				</select>
			</div>
		);
	}

}

export default Genre
