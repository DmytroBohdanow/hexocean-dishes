import React from 'react'
import classes from './orderPreview.module.css'

export const OrderPreview = props => {
    const {
        dishType,
        dishName,
        preparationTime,
        noOfSlices,
        diameter,
        spicinessScale,
        slicesOfBread,
    } = props

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Preview</h3>
            <div className={classes['order-preview-box']}>
                <div>
                    <p>Dish name: {dishName ? dishName : <span className={classes['preview-none']}>none</span>}</p>
                    <p>Preparation time: {preparationTime ? preparationTime : <span className={classes['preview-none']}>none</span>}</p>
                    <p>Dish type: {dishType ? dishType : <span className={classes['preview-none']}>none</span>}</p>
                </div>
                <div>
                    {dishType === 'pizza' ?
                        <>
                            <p>Number of slices: {noOfSlices ? noOfSlices : <span className={classes['preview-none']}>none</span>}</p>
                            <p>diameter: {diameter ? diameter : <span className={classes['preview-none']}>none</span>}</p>
                        </>
                        : null
                    }
                    {dishType === 'soup' ?
                        <>
                            <p>Spiciness scale: {spicinessScale ? spicinessScale : <span className={classes['preview-none']}>none</span>}</p>
                        </>
                        : null
                    }
                    {dishType === 'sandwich' ?
                        <>
                            <p>Slices of bread: {slicesOfBread ? slicesOfBread : <span className={classes['preview-none']}>none</span>}</p>
                        </>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}