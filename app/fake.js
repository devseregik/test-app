// Dependencies
import JSF from 'json-schema-faker';
import _ from 'underscore';

// JSON genres
import genresList from './data/genres.json';

/**
 * Count of generated objects
 *
 * @const
 * @type {Number}
 */
const COUNT_ITEMS = 10;

// Object schema
let fakeSchema = {
    type        : 'object',
    properties  : {
        film    : {
            type        : 'object',
            properties  : {
                title   : {
                    type    : 'string'
                },
                genre   : {
                    type        : 'string',
                    chance      : {
                        pickone     : [genresList]
                    }
                },
                year: {
                    type: 'integer',
                    chance: {
                        year: {
                            type: 'string'
                        }
                    }
                },
                rating    : {
                    type    : 'integer',
                    chance  : {
                        pickone: [_.range(1, 5)]
                    }
                }
            },
            required: ['title', 'genre', 'year', 'rating']
        }
    },
    required : ['film']
};

let fakeData = [];

for (let i = 0; i <= COUNT_ITEMS; i++) {
    const fakeObject = JSF(fakeSchema);

    fakeData.push(fakeObject.film)
}

module.exports = {
    data: fakeData
}
