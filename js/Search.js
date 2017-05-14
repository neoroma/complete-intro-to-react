import React from 'react'
import preload from '../public/data.json'
import R from 'ramda'
import {Card as ShowCard} from './Card'

const getShows = R.prop('shows')

const genCardComponent = show => (<ShowCard show={show} />)

const makeCards = R.map(genCardComponent)
const handleData = R.compose(makeCards, getShows)

export class Search extends React.Component {
    render() {
        return (
            <section className='search'>
                {handleData(preload)}
            </section>
        )
    }
}
