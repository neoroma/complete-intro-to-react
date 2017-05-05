import React from 'react'

export const Title = React.createClass({
  render () {
    const {title, color = 'whitesmoke'} = this.props

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
