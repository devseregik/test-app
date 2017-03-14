// Dependencies
import React from 'react';
import * as Semantic from 'semantic-ui-react'

// Styles
import './Poster.styl';

class Poster extends React.Component {

    render() {
        return(
            <div className="field">
                <label>Постер</label>
                <div className="poster">
                    <div className="poster__button">
                        <Semantic.Button circular icon="upload" size="big" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Poster
