import { actions } from './actions.js'

const DEFAULT_STATE = {
    searchTerm: ''
}

const setSearchTerm = (state, { searchTerm }) => ({ searchTerm })

export const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TERM:
            return setSearchTerm(state, action)
        default:
            return state
    }
}
