/* global test, expect */

import React from 'react'
import {shallow} from 'enzyme'
import {Card as ShowCard} from './Card'
import {Search} from './Search'
import preload from '../public/data.json'

xtest('Amount of card should be the same as shows in the preload', () => {
    const component = shallow(<Search />)
    expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})
