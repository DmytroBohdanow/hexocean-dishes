import React from 'react'
import classes from './orderResponses.module.css'

export const OrderResponses = props => {
    return (
        <div className={classes['response-box']}>
            <h3>Server responses</h3>
            {props.responses && props.responses.length > 0 ? props.responses && props.responses.map((response, index) => {
         return (<div className={classes.response} key={index}>
            <p>{index + 1}. {JSON.stringify(response)}</p>
          </div>)
          }) : <div>Hm... Nothing there. You should try to fill-up the form</div>}
        </div>
    )
       
}