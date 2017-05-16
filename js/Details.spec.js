/* global test, expect */

import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import {Details} from './Details'

test('Details component snapshot test', () => {
    const component = shallow(<Details />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})
