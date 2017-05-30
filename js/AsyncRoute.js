import React from 'react'
import { object } from 'prop-types'

class AsyncRoute extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.props.loadingPromise
            .then(module => this.component = module)
            .then(this.setState({ loaded: true }))
    }

    render() {

        if (this.state.loaded) {
            return (<this.component {...this.props.props} />)
        }

        return (<h3>loading ... </h3>)
    }
}

AsyncRoute.propTypes = {
    props: object,
    loadingPromise: object
}

export { AsyncRoute }
