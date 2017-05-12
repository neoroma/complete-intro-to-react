import React from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router'
import {Landing} from './Landing'
import createBrowserHistory from 'history/createBrowserHistory'

import '../public/normalize.css'
import '../public/style.css'

export class App extends React.Component {

    render() {

        const history = createBrowserHistory()

        return (
            <div className='app'>
                <Router history={history} >
                    <Route exactly='/' component={Landing} />
                </Router>
            </div>
        )
    }
}


// render(React.createElement(new App()), document.getElementById('app'))
render(<App />, document.getElementById('app'))
