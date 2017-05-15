import React from 'react'
import preload from '../public/data.json'
import R from 'ramda'
import {Card as ShowCard} from './Card'

const getShows = R.prop('shows')

const genCardComponent = show => (<ShowCard show={show} key={show.imdbID} />)

// (<ShowCard {...show} key={show.imdbID} />) will be the same as <ShowCard poster={show.poster} ... />

const makeCards = R.map(genCardComponent)

export class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    }

    handleSearchTermChange({target: {value: searchTerm}}) {
        this.setState({
            searchTerm
        })
    }

    render() {

        const predicate = R.compose(R.contains(this.state.searchTerm.toLowerCase()), R.toLower, R.prop('title'))
        const filterByTitle = R.filter(predicate)
        const handleData = R.compose(makeCards, filterByTitle, getShows)

        return (
            <section className='search'>
                <div>
                    <header>
                        <h4>svideo</h4>
                        <input value={this.state.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
                    </header>
                </div>
                <div>{handleData(preload)}</div>
            </section>
        )
    }
}
