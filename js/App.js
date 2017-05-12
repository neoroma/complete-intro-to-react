import React from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import {Landing} from './Landing'
import {Search} from './Search'

import '../public/normalize.css'
import '../public/style.css'

class App extends React.Component {

    render() {

        return (
            <BrowserRouter>
                <div className='app'>
                    <Route exact path='/' component={Landing} />
                    <Route path='/search' component={Search} />
                </div>
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('app'))
