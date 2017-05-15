import React from 'react'
import preload from '../public/data.json'
import R from 'ramda'
import {Card as ShowCard} from './Card'

const getShows = R.prop('shows')

const genCardComponent = show => (<ShowCard show={show} key={show.imdbID} />)

// (<ShowCard {...show} key={show.imdbID} />) will be the same as <ShowCard poster={show.poster} ... />

const makeCards = R.map(genCardComponent)
const handleData = R.compose(makeCards, getShows)

export class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: 'this is the initial string'
        }
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    }

    handleSearchTermChange({target: {value: searchTerm}}) {
        this.setState({
            searchTerm
        })
    }

    render() {
        return (
            <section className='search'>
                <header>
                    <h4>{this.state.searchTerm}</h4>
                    <input value={this.state.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
                </header>
                <div>{handleData(preload)}</div>
            </section>
        )
    }
}
