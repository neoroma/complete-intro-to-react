import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { connect } from 'react-redux'

export class Landing extends React.Component {

    render() {
        return (
            <div className='landing'>
                <Header />
                <input type='text' placeholder='Search' />
                <Link to='/search'>or browse all</Link>
            </div>
        )
    }
}
