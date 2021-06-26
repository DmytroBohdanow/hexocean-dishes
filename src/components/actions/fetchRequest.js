import axios from 'axios'

export const fetchRequest = (values) => {
    const request = {
        'name': values['name'],
        'type': values['dish-type'],
        'preparation_time': values['preparation-time'],
    }

    if (values['dish-type'] === 'pizza') {
        request['diameter'] = parseInt(values['diameter'])
        request['no_of_slices'] = parseInt(values['no_of_slices'])
    } else if (values['dish-type'] === 'soup') {
        Number.isInteger(parseInt(values['spiciness_scale'])) ? request['spiciness_scale'] = parseInt(values['spiciness_scale']) : request['spiciness_scale'] = 5
    } else if (values['dish-type'] === 'sandwich') {
        request['slices_of_bread'] = parseInt(values['slices_of_bread'])
    }
    return function (dispatch) {
        dispatch({ type: 'REQUEST_STARTED' })
        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://frosty-wood-6558.getsandbox.com:443/dishes',
            data: request,
        }).then(response => {
            const orders = response.data
            dispatch({ type: 'RESPONSE_SUCCESS', payload: orders })
        }).catch(error => {
            dispatch({ type: 'RESPONSE_FAILURE', payload: error.message })
        })
    }
}