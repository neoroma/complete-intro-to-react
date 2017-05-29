import React from 'react'
import { string } from 'prop-types'

export const Title = React.createClass({

    propTypes() {
        return {
            title: string,
            color: string
        }
    },

    render () {
        const { title, color = 'whitesmoke' } = this.props
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
