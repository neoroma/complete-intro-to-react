import React from 'react'

const getId = ({match: {params}}) => params.id

export const render = (props) => (
    <div className='details'>
        <span>{getId(props)}</span>
    </div>
)

