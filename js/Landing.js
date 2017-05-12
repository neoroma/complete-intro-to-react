import React from 'react'

export class Landing extends React.Component {

    render() {
        return (
            <div className='landing'>
                <h4>SVID_EO</h4>
                <input type='text' placeholder='Search' />
                <a>or browse all</a>
            </div>
        )
    }
}
