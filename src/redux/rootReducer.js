const initialState = {
    response: [],
    request: {},
    loading: false,
    error: '',
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'RESPONSE_SUCCESS':
            return {
                ...state,
                loading: false,
                error: '',
                response: [...state.response, action.payload]
            }
            case 'RESPONSE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'REQUEST_STARTED': 
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}