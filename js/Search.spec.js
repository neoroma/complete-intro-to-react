/* global test, expect */

import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import {Search} from './Search'

test('Search component snapshot test', () => {
    const component = shallow(<Search />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})
