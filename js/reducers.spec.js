/* global test, expect */

import { rootReducer } from './reducers'

test('reducers init', () => {
    let state
    state = rootReducer(undefined, {})
    expect(state).toEqual({ searchTerm: '', omdbData: {} })
})


test('reducers search', () => {
    let state
    state = rootReducer({ searchTerm: '', omdbData: {} }, { type: 'SET_SEARCH_TERM', searchTerm: 'house' })
    expect(state).toEqual({ searchTerm: 'house', omdbData: {} })
})
