const Title = React.createClass({
    render() {

        const { title } = this.props

        return (
            React.DOM.div({},
                React.DOM.h4({}, `TITLE PROP : ${title}`)
            )
        )
    }
})

const title = React.createFactory(Title)

const Component = React.createClass({
    render() {
        return (
            React.DOM.div({},
                title({ title: 'prop 1' }),
                title({ title: 'prop 2' }),
                title({ title: 'prop 3' }),
                title({ title: 'prop 4' }),
                title({ title: 'prop 5' }),
                title({ title: 'this is cool' })
            )
        )
    }
})

ReactDOM.render(React.createElement(Component), document.getElementById('app'))