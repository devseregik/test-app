// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import Paginate from 'react-paginate';
import * as Semantic from 'semantic-ui-react';
import * as Helper from 'helpers';
import $ from 'jquery';
import _ from 'underscore';

// Blocks
import { Row, RowEmpty } from './blocks/';

// Styles
import './Table.styl';

// Constants
import Const from './constants';

/**
 * Table class
 *
 * @extends React.Component
 */
class Table extends React.Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		/**
		 * Local state
		 *
		 * @type {Object}
		 */
		this.state = {
			offset		: 0,
			searchValue	: '',
			sortBy		: null,
			sort		: {
				title	: null,
				genre	: null,
				year	: null,
				rating	: null
			}
		};
	}

	/**
	 * Handle change page on pagination
	 *
	 * @param {Integer} selected Selected page
	 */
	handlePageChange({ selected }) {
		const offset = Math.ceil(selected * Const.PER_PAGE);

		this.setState({
			offset : offset
		});
	}

	/**
	 * Handle search
	 *
	 * @param {Event} e
	 * @param {String} value Searching value
	 */
	handleSearch(e, { value }) {
		if (value == '') {
			this.setState({ offset: 0 })
		}

		this.setState({
			searchValue: value.trim()
		});
	}

	/**
	 * Handle sorting
	 *
	 * @param {Event} e
	 */
	handleSort(e) {
		const sortBy = $(e.target).data('sortby');

		let sortTypeByAttr = this.state.sort[sortBy];

		if (!sortTypeByAttr) {
			sortTypeByAttr = Const.SORT_DESC;
		}
		else {
			sortTypeByAttr = sortTypeByAttr == Const.SORT_DESC ? Const.SORT_ASC : Const.SORT_DESC;
		}

		this.setState({
			sort: {
				[sortBy]: sortTypeByAttr
			}
		});

		this.setState({ sortBy: sortBy });
	}

	/**
     * @see https://facebook.github.io/react/docs/rendering-elements.html
     */
	render() {
		// Origin data
		let films = this.props.films;

		// Prepared data on the films regarding the sort
		if (this.state.sortBy) {
			const sortBy = this.state.sortBy;
			const sortType = this.state.sort[sortBy];

			films = _.sortBy(films, sortBy);

			if (sortType == Const.SORT_DESC) {
				films = films.reverse();
			}
		}

		// Prepared data on the films regarding the search
		films = _.filter(films, film => {
			return film.title.indexOf(this.state.searchValue) >= 0;
		});

		// Paginate vars
		const pageCount 		= Math.ceil(films.length / Const.PER_PAGE);
		const from 				= this.state.offset;
		const to				= from + Const.PER_PAGE;
		const isShowPaginate 	= pageCount > 1;
		const isEmptyBySearch	= !films.length && this.state.searchValue != ''

		return (
			<div>
				<div className="clearfix">
					 <Semantic.Input
						 className		= "float-r"
						 icon			= "search"
						 placeholder	= 'Поиск на названию...'
						 onChange		= { this.handleSearch.bind(this) }
					 />
				</div>

	            <Semantic.Table className="ui table js-datatable" celled padded>
	                <Semantic.Table.Header>
	                    <Semantic.Table.Row>
	                        <Semantic.Table.HeaderCell className="center aligned">
								Название <Semantic.Icon link name='sort' data-sortby="title" onClick={ this.handleSort.bind(this) } />
							</Semantic.Table.HeaderCell>
	                        <Semantic.Table.HeaderCell className="center aligned">
								Жанр <Semantic.Icon link name='sort' data-sortby="genre" onClick={ this.handleSort.bind(this) } />
							</Semantic.Table.HeaderCell>
	                        <Semantic.Table.HeaderCell className="center aligned">
								Год <Semantic.Icon link name='sort' data-sortby="year" onClick={ this.handleSort.bind(this) } />
							</Semantic.Table.HeaderCell>
	                        <Semantic.Table.HeaderCell className="center aligned">
								Рейтинг <Semantic.Icon link name='sort' data-sortby="rating" onClick={ this.handleSort.bind(this) } />
							</Semantic.Table.HeaderCell>
	                    </Semantic.Table.Row>
	                </Semantic.Table.Header>

	                <Semantic.Table.Body>
						{
							films.length
								?
									films
										.slice(from, to)
										.map((data, i) => {
											return <Row key={ i } film={ data } />
										})
								:
									<RowEmpty bySearch={ isEmptyBySearch } />
						}
	                </Semantic.Table.Body>

					<Semantic.Table.Footer>
		                <Semantic.Table.Row>
							<Semantic.Table.HeaderCell className="stats">
								Всего { this.props.films.length } { Helper.Str.decline(['фильмов', 'фильм', 'фильма'], this.props.films.length) }
							</Semantic.Table.HeaderCell>
		                    <Semantic.Table.HeaderCell colSpan='3' className="right aligned">
							{
								isShowPaginate
									?
										<Paginate
											previousLabel			= { <i className="left chevron icon"></i> }
											nextLabel				= { <i className="right chevron icon"></i> }
											breakLabel				= { <div className="disabled item">...</div> }
											breakClassName			= "break-me"
											pageCount				= { pageCount }
											marginPagesDisplayed	= { 1 }
											pageRangeDisplayed		= { 2 }
											containerClassName		= "ui pagination menu"
											activeClassName			= "active"
											pageLinkClassName		= "item"
											previousLinkClassName	= "icon item"
											nextLinkClassName		= "icon item"
											onPageChange			= { this.handlePageChange.bind(this) }
										/>
									:
										null
							}
							</Semantic.Table.HeaderCell>
		                </Semantic.Table.Row>
		            </Semantic.Table.Footer>
	            </Semantic.Table>

			</div>
		);
	}

}

export default connect(
    state => ({
        films: state
    })
)(Table)
