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
                trailer: string
            })
        }
    }

    render() {
        const {show} = this.props

        return (
            <div className='details'>
                <header>
                    <h4>Details</h4>
                </header>
                <section>
                    <div>
                        {show.title}
                        <p>{show.description}</p>
                    </div>
                    <div><img src={`/public/img/posters/${show.poster}`} /></div>
                </section>
                <div>
                    <iframe allowFullScreen src={`https://www.youtube-nocookie.com/embed/${show.trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' />
                </div>
            </div>
        )
    }
}
