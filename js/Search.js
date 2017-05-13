import React from 'react'
import preload from '../public/data.json'
import R from 'ramda'

const getShows = R.prop('shows')
const getProps = R.pick(['title', 'poster', 'description', 'year'])

// actually render method
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

const makeJsx = R.compose(toMarkUp, getProps)

const workData = R.compose(R.map(makeJsx), getShows)

export class Search extends React.Component {
    render() {
        return (
            <section className='search'>
                {workData(preload)}
            </section>
        )
    }
}
