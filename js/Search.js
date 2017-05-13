import React from 'react'
import preload from '../public/data.json'
import R from 'ramda'

const getShows = R.prop('shows')
const mapToTitle = R.prop('title')
const toH3 = title => (<h3>{title}</h3>)
const makeJsx = R.compose(toH3, mapToTitle)

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
