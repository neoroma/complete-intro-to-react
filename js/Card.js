import React from 'react'
import {shape, string} from 'prop-types'

export class Card extends React.Component {

    // should be ripped out for production code
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
        const {show: {title, poster, year, description}} = this.props
        return <div className='show-card'>
            <img src={`/public/img/posters/${poster}`} />
            <div>
                <h3>{title}</h3>
                <h4>({year})</h4>
                <p>{description}</p>
            </div>
        </div>
    }
}
