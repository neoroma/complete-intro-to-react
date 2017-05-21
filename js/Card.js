import React from 'react'
import {shape, string} from 'prop-types'
import {Link} from 'react-router-dom'

export class Card extends React.Component {

    // should be ripped out for production code
    static propTypes() {
        return {
            show: shape({
                title: string.isRequired,
                poster: string.isRequired,
                year: string.isRequired,
                description: string.isRequired,
                imdbID: string.isRequired
            })
        }

    }

    render() {
        const {show: {title, poster, year, description, imdbID}} = this.props
        return <Link to={`/details/${imdbID}`}>
            <div className='show-card'>
                <img src={`/public/img/posters/${poster}`} />
                <div>
                    <h3>{title}</h3>
                    <h4>({year})</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    }
}
