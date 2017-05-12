import React from 'react'
import {Link} from 'react-router-dom'

export class Landing extends React.Component {

    render() {
        return (
            <div className='landing'>
                <h4>SVID_EO</h4>
                <input type='text' placeholder='Search' />
                <Link to='/search'>or browse all</Link>
            </div>
        )
    }
}
