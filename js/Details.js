import React from 'react'
import {shape, string} from 'prop-types'
import {Header} from './Header'
import zlFetch from 'zl-fetch'

export class Details extends React.Component {

    static propTypes() {
        return {
            show: shape({
                title: string,
                poster: string,
                year: string,
                description: string,
                trailer: string,
                imdbID: string
            })
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            fullName: ''
        }
    }

    componentDidMount() {
        zlFetch('https://api.github.com/users/chriscoyier/repos')
            .then(data => data[5].full_name)
            .then(fullName => this.setState({
                fullName
            }))
    }

    render() {
        const {show} = this.props

        console.log('rendering')

        return (
            <div className='details'>
                <Header />
                <section>

                    <h1>full name : {this.state.fullName ? this.state.fullName : 'Loading'}</h1>
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
