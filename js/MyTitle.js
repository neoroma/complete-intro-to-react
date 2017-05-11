import React from 'react'

export const Title = React.createClass({
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
