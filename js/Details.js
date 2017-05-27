import React from 'react'
import { shape, string, func } from 'prop-types'
import { Header } from './Header'
import { connect } from 'react-redux'
import { getGitHubData } from './actionCreators'

class Details extends React.Component {

    static propTypes() {
        return {
            dispatch: func,
            fullName: string,
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

    componentDidMount() {
        this.props.dispatch(getGitHubData('neoroma'))
    }

    render() {
        const {show} = this.props

        return (
            <div className='details'>
                <Header />
                <section>

                    <h1>full name : {this.props.fullName ? this.props.fullName : 'Loading'}</h1>
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

const toExport = connect(mapStateToProps)(Details)
export { toExport as Details }

function mapStateToProps({ fullName }) {
    return { fullName }
}
