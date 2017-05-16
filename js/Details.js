import React from 'react'
import {shape, string} from 'prop-types'

export class Details extends React.Component {

    static propTypes() {
        return {
            show: shape({
                title: string,
                poster: string,
                year: string,
                description: string,
            })
        }
    }

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
