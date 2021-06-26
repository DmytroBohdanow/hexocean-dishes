import React from 'react'
import classes from './orderForm.module.css'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { OrderPreview } from '../orderPreview'

let OrderForm = props => {

    const {
        dishType,
        handleSubmit,
        dishName,
        preparationTime,
        noOfSlices,
        diameter,
        spicinessScale = 5,
        slicesOfBread,
        pristine,
        reset,
        submitting,
    } = props

    return (
        <div className={classes['order-form-box']}>
            <form onSubmit={handleSubmit}>

                <div className={classes['name-box']}>
                    <label htmlFor="name">Dish name </label>
                    <Field name="name" component="input" className={classes['order-form-name']} type="text" required />
                </div>

                <div className={classes['preparation-time-box']}>
                    <label htmlFor="preparation-time">Preparation time </label>
                    <Field name="preparation-time" component='input' type="time" value="00:00:00" className={classes['preparation-time']} step="1" required />
                </div>

                <div>
                    <label htmlFor="dish-type">Type </label>
                    <Field component="select" name="dish-type" className={classes['dish-type']} required>
                        <option value="" disabled>Select</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="sandwich">Sandwich</option>
                    </Field>
                </div>

                {dishType === 'pizza' ? <><div className={classes['no_of_slices-box']}>
                    <label htmlFor="no_of_slices">Number of slices </label>
                    <Field name="no_of_slices" component="input" type="number" className={classes['no_of_slices']} min="0" required />
                </div>
                    <div className={classes['diameter-box']}>
                        <label htmlFor="diameter">Diameter </label>
                        <Field name="diameter" component="input" type="number" step="0.01" className={classes['diameter']} min="0" required />
                    </div></> : null}

                {dishType === 'soup' ? <div className={classes['spiciness_scale-box']}>
                    <label htmlFor="spiciness_scale">Spiciness scale </label>
                    <Field name="spiciness_scale" component="input" type="range" style={{backgroundColor: 'red'}} className={classes['spiciness_scale']} min='0' max='10' /> {spicinessScale}
                </div> : null}

                {dishType === 'sandwich' ? <div className={classes['slices_of_bread-box']}>
                    <label htmlFor="slices_of_bread">Slices of bread </label>
                    <Field name="slices_of_bread" component="input" type="number" className={classes['slices_of_bread']} required />
                </div> : null}

                {props.anyTouched ?
                    <OrderPreview
                        dishType={dishType}
                        dishName={dishName}
                        preparationTime={preparationTime}
                        noOfSlices={noOfSlices}
                        diameter={diameter}
                        spicinessScale={spicinessScale}
                        slicesOfBread={slicesOfBread}
                    /> : null}

                <div>
                    <button type="submit" disabled={submitting} className={classes['submit-btn']}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className={classes['reset-btn']}>Reset values</button>
                </div>
            </form>
        </div>
    )
}

OrderForm = reduxForm({
    form: 'order'
})(OrderForm)

const selector = formValueSelector('order')
OrderForm = connect(state => {
    const dishName = selector(state, 'name')
    const preparationTime = selector(state, 'preparation-time')
    const dishType = selector(state, 'dish-type')
    const noOfSlices = selector(state, 'no_of_slices')
    const diameter = selector(state, 'diameter')
    const spicinessScale = selector(state, 'spiciness_scale')
    const slicesOfBread = selector(state, 'slices_of_bread')
    return {
        dishName,
        preparationTime,
        dishType,
        noOfSlices,
        diameter,
        spicinessScale,
        slicesOfBread,
    }
})(OrderForm)

export default OrderForm