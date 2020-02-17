import { Action, SET_SELECTED_PAGE } from './actions'

const initialstate = {
    selectedPage: ''
}

export default (state = initialstate, action: Action) => {
    console.log(action)
    switch (action.type) {
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.payload
            }
        default:
            return state

    }
}