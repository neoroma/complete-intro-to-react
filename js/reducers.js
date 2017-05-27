import { actions } from './actions.js'
import R from 'ramda'

const DEFAULT_STATE = {
    searchTerm: '',
    omdbData: {}
}

const setSearchTerm = (state, { searchTerm }) => R.merge(state, { searchTerm })
const addGitHubData = (state, { fullName }) => R.merge(state, { fullName })

export const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TERM:
            return setSearchTerm(state, action)
        case actions.ADD_GITHUB_DATA:
            return addGitHubData(state, action)
        default:
            return state
    }
}
