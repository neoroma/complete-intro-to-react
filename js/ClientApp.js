import React from 'react'
import ReactDOM from 'react-dom'
import {Title} from './MyTitle'

const Component = React.createClass({
    render () {
        return (
            <div>
                <Title title="prop 1" color="peru"/>
                <Title title="prop 2" color="goldenrod"/>
                <Title title="prop 3" color="tomato"/>
                <Title title="prop 4" color="green"/>
                <Title title="prop 5" color="red"/>
                <Title title="prop 15"/>
                <Title title="this is cool" color="rebeccapurple"/>
            </div>
        )
    }
})

ReactDOM.render(React.createElement(Component), document.getElementById('app'))
