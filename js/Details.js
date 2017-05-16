import React from 'react'
import R from 'ramda'

const getId = ({match: {params}}) => params.id

export class Details extends React.Component {
    render() {

        const idParam = getId(this.props)
        const {data: {shows}} = this.props
        const finder = R.find(R.propEq('imdbID', idParam))
        const show = finder(shows)

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
