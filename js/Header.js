import React from 'react'
import { Link } from 'react-router-dom'
import { string, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'

class Header extends React.Component {

    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    static propTypes() {
        return {
            searchTerm: string,
            showSearch: bool,
            dispatch: func
        }
    }

    handler({target: {value: searchTerm}}) {
        this.props.dispatch(setSearchTerm(searchTerm))
    }

    searchMarkUp(show, searchTerm) {
        return show
            ? <input value={searchTerm} onChange={this.handler} type='text' placeholder='Search' />
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
