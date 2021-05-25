import React from 'react'
import './Button.css'

export default props => {
    
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.triple ? 'triple' : ''
    classes += props.double ? 'double' : ''

    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
    /*<button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.triple ? 'triple' : ''}
        ${props.double ? 'double' : ''}
    `}>
        {props.label}
    </button>*/