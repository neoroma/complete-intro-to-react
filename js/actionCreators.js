import { actions } from './actions.js'
import zlFetch from 'zl-fetch'
import R from 'ramda'

export function setSearchTerm(searchTerm) {
    return {
        type: actions.SET_SEARCH_TERM,
        searchTerm
    }
}

export function addGithubData(fullName) {
    return {
        type: actions.ADD_GITHUB_DATA,
        fullName
    }
}

export function getGitHubData(username) {
    return function (dispatch) {

        zlFetch(`https://api.github.com/users/${username}/repos`)
            .then(data => data[5].full_name)
            .then(R.compose(dispatch, addGithubData))

    }
}
