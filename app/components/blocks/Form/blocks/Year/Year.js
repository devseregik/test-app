// Dependencies
import React from 'react';
import { HOC } from 'formsy-react';
import * as Semantic from 'semantic-ui-react'
import _ from 'underscore';

/**
 * Year dropdown class
 *
 * @extends React.Component
 */
class Year extends React.Component {

    /**
     * @see https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    propTypes: {
        from: React.PropTypes.string.isRequired
    }

    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            didSelected: false
        }
    }

    /**
	 * @see https://facebook.github.io/react/docs/react-component.html#componentwillmount
	 */
    componentWillMount() {
        this.years = [];

        _.range( Number(this.props.from), new Date().getFullYear() + 1 )
            .reverse()
            .map((label, i) => {
                this.years.push({
                    value: label,
                    text: label
                });
            });
    }

    /**
	 * @see https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate
	 */
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.submitted) {
            this.setState({
                didSelected: false
            });

            return true;
        }
        else if (nextProps.hasValue() && !nextState.didSelected) {
            this.setState({
                didSelected: true
            });

            return true;
        }

        return false;
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
				<label>Год</label>
                <Semantic.Dropdown
                    placeholder = "Год выхода"
                    value       = { this.props.getValue() }
                    fluid
                    selection
                    options     = { this.years }
                    onChange    = { this.onChange.bind(this) }
                />
			</div>
		);
	}

}

export default HOC(Year)
