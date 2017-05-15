import React from 'react'
const {string} = React.PropTypes

export const Title = React.createClass({

    propTypes() {
        return {
            title: string,
            color: string
        }
    },

    render () {
        const {title, color = 'whitesmoke'} = this.props
        const style = {
            color
        }

        return (
            <div>
                <h2 style={style}>
                    <span>{title}</span>
                </h2>
            </div>
        )
    }
})
