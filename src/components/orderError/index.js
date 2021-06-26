import React from 'react'
import classes from './orderError.module.css'

export const OrderError = props => {
    return (
        <div className={classes['order-error-box']}>
            <p>Oops... Server has returned an error to the last request. Here it is: {props.error}</p>
        </div>
    )
}