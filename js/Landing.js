import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { connect } from 'react-redux'
import { string } from 'prop-types'
import { setSearchTerm } from './actionCreators'

class Landing extends React.Component {

    constructor(props) {
        super(props)

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
        this.dispatch = this.props.dispatch
    }

    static propTypes() {
        return {
            searchTerm: string
        }
    }

    handleSearchTermChange({target: {value: searchTerm}}) {
        this.dispatch(setSearchTerm(searchTerm))
    }

    render() {
        return (
            <div className='landing'>
                <Header />
                <input value={this.props.searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
                <Link to='/search'>or browse all</Link>
            </div>
        )
    }
}

function mapStateToProps({searchTerm}) {
    return {searchTerm}
}

export default connect(mapStateToProps)(Landing)
