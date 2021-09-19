import { DELETE_USER, SEARCH_USER, ADD_USER, EDIT_USER } from './../action_type'
const actADD_USER = (user) => {
    const action = {
        type: ADD_USER,
        payload: user,
    }
}

const actDELETE_USER = (user) => {
    const action = {
        type: DELETE_USER,
        payload: user,
    }
}

const actEDIT_USER = (user) => {
    const action = {
        type: EDIT_USER,
        payload: user,
    }
}
export { actADD_USER, actDELETE_USER, actEDIT_USER }