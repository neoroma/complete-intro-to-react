import React from 'react'
import R from 'ramda'
import { Card as ShowCard } from './Card'
import { Header } from './Header'
import { shape, arrayOf, object, string } from 'prop-types'
import { connect } from 'react-redux'

const getShows = R.prop('shows')

const genCardComponent = show => (<ShowCard show={show} key={show.imdbID} />)

const makeCards = R.map(genCardComponent)

class Search extends React.Component {

    // getInitialState
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        // will be called on the node env for server side rendering
        console.log('search: componentWillMount')
    }

    componentDidMount() {

        // dom api is available
        // ajax requests
        console.log('search: componentDidMount')
    }

    componentWillUnmount() {

        // leaving the dom
        // remove dom listeners
        console. log('search: componentWillUnmount')
    }

    render() {
        console. log('search: render')
        const predicate = R.compose(R.contains(this.props.searchTerm.toLowerCase()), R.toLower, R.prop('title'))
        const filterByTitle = R.filter(predicate)
        const handleData = R.compose(makeCards, filterByTitle, getShows)

        return (
            <section className='search'>
                <Header showSearch />
                <div>{handleData(this.props.data)}</div>
            </section>
        )
    }
}

Search.propType = {
    searchTerm: string,
    data: shape({
        shows: arrayOf(object)
    })
}

function mapStateToProps({searchTerm}) {
    return {searchTerm}
}

export const Unwrapped = Search
export default connect(mapStateToProps)(Search)
