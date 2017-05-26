import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { connect } from 'react-redux'
import { string, func, object } from 'prop-types'
import { setSearchTerm } from './actionCreators'

class Landing extends React.Component {

    constructor(props) {
        super(props)

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
        this.handleFromSubmit = this.handleFromSubmit.bind(this)
        this.dispatch = this.props.dispatch
    }

    static propTypes() {
        return {
            searchTerm: string,
            dispatch: func
        }
    }

    handleSearchTermChange({target: {value: searchTerm}}) {
        this.dispatch(setSearchTerm(searchTerm))
    }

    handleFromSubmit(event) {
        event.preventDefault()

        this.context.router.history.push('/search')
    }

    render() {
        return (
            <div className='landing'>
                <Header />
                <form onSubmit={this.handleFromSubmit} >
                    <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
                </form>
                <Link to='/search'>or browse all</Link>
            </div>
        )
    }
}

Landing.contextTypes = {
    router: object
}

function mapStateToProps({searchTerm}) {
    return {searchTerm}
}

export default connect(mapStateToProps)(Landing)
