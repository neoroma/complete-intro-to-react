import React from 'react'

export class Details extends React.Component {
    render() {
        const {show} = this.props

        return (
            <div className='details'>
                <div>
                    {show.title}
                    {show.poster}
                    {show.description}
                </div>
            </div>
        )
    }
}
