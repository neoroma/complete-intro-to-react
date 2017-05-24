import { actions } from './actions.js'

export function setSearchTerm(searchTerm) {
    return {
        type: actions.SET_SEARCH_TERM,
        searchTerm
    }
}