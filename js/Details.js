import React from 'react'

const getId = ({ match : {params} }) => params.id

export class Details extends React.Component {
    render() {

        return (
            <div className='details'>
                <span>{getId(this.props)}</span>
            </div>
        )
    }
}
