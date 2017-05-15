/* global test, expect */

import React from 'react'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import {Search} from './Search'
import {Card as ShowCard} from './Card'

test('Search component snapshot test', () => {
    const component = shallow(<Search />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
})

test('Search should render correct amount of shows based on search', () => {
    const search = 'house'
    const component = shallow(<Search />)
    component.find('input').simulate('change', {
        target: {
            value: search
        }
    })
    expect(component.find(ShowCard).length).toEqual(2)
})
