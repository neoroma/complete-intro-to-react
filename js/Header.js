import React from 'react'
import { Link } from 'react-router-dom'
import { string, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import R from 'ramda'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    }

    static propTypes() {
        return {
            searchTerm: string,
            showSearch: bool,
            dispatch: func
        }
    }

    handleSearchTermChange({ target: { value: searchTerm } }) {
        const app = R.compose(this.props.dispatch, setSearchTerm)
        app(searchTerm)
    }

    searchMarkUp(show, searchTerm) {
        return show
            ? <input value={searchTerm} onChange={this.handleSearchTermChange} type='text' placeholder='Search' />
            : <Link to='/search'>Back to search</Link>
    }

    render() {

        const { searchTerm, showSearch } = this.props

        return (
            <header>
                <h4 style={{ color: 'yellow' }}>
                    <Link to='/'>SVID_EO</Link>
                </h4>
                {this.searchMarkUp(showSearch, searchTerm)}
            </header>
        )
    }
}

function mapStateToProps({ searchTerm }) {
    return { searchTerm }
}

const toExport = connect(mapStateToProps)(Header)
export { toExport as Header }
