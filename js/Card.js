import React from 'react'
import R from 'ramda'

const getProps = R.pick(['title', 'poster', 'description', 'year'])

const toMarkUp = ({title, poster, year, description}) => (
    <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
        </div>
    </div>
)

const app = R.compose(toMarkUp, getProps)

export class Card extends React.Component {
    render() {
        const {show} = this.props
        return app(show)
    }
}
