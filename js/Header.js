import React from 'react'
import {Link} from 'react-router-dom'
import {func, string, bool} from 'prop-types'

export class Header extends React.Component {

    static propTypes() {
        return {
            searchTerm: string,
            showSearch: bool,
            handleSearchTermChange: func
        }
    }

    searchMarkUp(show, searchTerm, handler) {
        return show
            ? <input value={searchTerm} onChange={handler} type='text' placeholder='Search' />
            : <Link to='/search'>Back to search</Link>
    }

    render() {

        const { searchTerm, showSearch, handleSearchTermChange } = this.props

        return (
            <header>
                <h4 style={{color: 'yellow'}}>
                    <Link to='/'>SVID_EO</Link>
                </h4>
                {this.searchMarkUp(showSearch, searchTerm, handleSearchTermChange)}
            </header>
        )
    }
}
