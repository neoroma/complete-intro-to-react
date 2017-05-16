import React from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import {Landing} from './Landing'
import {Search} from './Search'
import {Details} from './Details'

import '../public/normalize.css'
import '../public/style.css'

class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <div className='app'>
                    <Route exact path='/' component={Landing} />
                    <Route path='/search' component={Search} />
                    <Route path='/details/:id' component={Details} />
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('app'))
