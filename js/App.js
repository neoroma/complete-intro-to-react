import React from 'react'
import {render} from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

export const App = React.createClass({
    render () {
        return (
            <div className='app'>
                <div className='landing'>
                    <h4>svid-eo</h4>
                    <input type='text' placeholder='Search' />
                    <a>or browse all</a>
                </div>
            </div>
        )
    }
})

// render(React.createElement(App), document.getElementById('app'))
render(<App />, document.getElementById('app'))
