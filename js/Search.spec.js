/* global test, expect */

import React from 'react'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Unwrapped as Search } from './Search'
import preload from '../public/data.json'

import { Provider } from 'react-redux'
import { store } from './store'
import { setSearchTerm } from './actionCreators'

test('Search component snapshot test', () => {
    const component = shallow(<Search data={preload} searchTerm='' />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})

xtest('Search should render correct amount of shows based on search', () => {
    const search = 'house'

    store.dispatch(setSearchTerm(search))

    const component = render(<Provider store={store}><Search data={preload} searchTerm={''} /></Provider>)

    component.find('input').simulate('change', {
        target: {
            value: search
        }
    })
    expect(component.find('.show-card').length).toEqual(2)
})
