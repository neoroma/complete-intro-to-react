import React from 'react'
import R from 'ramda'
import { Route, Redirect } from 'react-router'
import preload from '../public/data.json'
import { Provider } from 'react-redux'
import { store } from './store'

import Landing  from './Landing'
import Search from './Search'
import { Details } from './Details'

import '../public/normalize.css'
import '../public/style.css'

const { shows } = preload

const getId = ({ match: { params } }) => params.id
const getShow = props => R.find(R.propEq('imdbID', getId(props)))

// This is a stateless functional component
export const App = () => (
    <Provider store={store}>
        <div className='app'>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={(props) => <Search data={preload} {...props} />} />
            <Route path='/details/:id' component={
                (props) => getShow(props)(shows)
                    ? <Details show={getShow(props)(shows)}  {...props} />
                    : <Redirect to='/search' />
            } />
        </div>
    </Provider>
)

