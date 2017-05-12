import React from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'
import {HashRouter} from 'react-router-dom'
import {Landing} from './Landing'
import {Search} from './Search'

import createBrowserHistory from 'history/createBrowserHistory'

import '../public/normalize.css'
import '../public/style.css'

class App extends React.Component {

    render() {

        const history = createBrowserHistory()

        return (
            <HashRouter history={history}>
                <div className='app'>
                    <Route exact path='/' component={Landing} />
                    <Route path='/search' component={Search} />
                </div>
            </HashRouter>
        )
    }
}

render(<App />, document.getElementById('app'))
