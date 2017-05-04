const Title = React.createClass({
    render() {

        const { title, color = 'whitesmoke' } = this.props

        return (
            React.DOM.div({},
                React.DOM.h4({
                    style: {
                        color
                    }
                }, `TITLE PROP : ${title}`)
            )
        )
    }
})

const title = React.createFactory(Title)

const Component = React.createClass({
    render() {
        return (
            React.DOM.div({},
                title({ title: 'prop 1', color: 'peru' }),
                title({ title: 'prop 2', color: 'goldenrod' }),
                title({ title: 'prop 3', color: 'tomato' }),
                title({ title: 'prop 4', color: 'green' }),
                title({ title: 'prop 5' }),
                title({ title: 'this is cool' })
            )
        )
    }
})

ReactDOM.render(React.createElement(Component), document.getElementById('app'))