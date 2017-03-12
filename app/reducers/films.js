// Dependencies
import _ from 'underscore';

// Constants
import Const from '../components/blocks/Form/constants';

// Default state
let initialState = [];

// If environment is development, w`ll set fake data into state
if (ENV_DEV) {
    const fakeData = require('../fake.js').data;

    initialState = fakeData
}

// Films reducer
export default function films(state = initialState, action = {}) {
    switch (action.type) {
        case Const.ADD_FILM:
            return [
                action.payload,
                ...state
            ];
            break;

        default:
            return state;
            break;
    }
};
