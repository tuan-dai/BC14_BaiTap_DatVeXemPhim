import { DELETE_USER, SEARCH_USER, ADD_USER, EDIT_USER } from '../action_type'
const initialState = {
    userList: [
        {
            id: 1,
            fullname: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "123456789",
            type: "VIP",
        },
        {
            id: 2,
            fullname: "Nguyen Van A",
            username: "vana",
            email: "vana@gmail.com",
            phoneNumber: "123456789",
            type: "USER",
        },
    ],
    keyword: "",
    userEdit: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER: {
            let userList = [...state.userList];
            const index = userList.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                userList.splice(index, 1);
                state.userList = userList;
            }
            return { ...state };
        }
        case SEARCH_USER: {
            state.keyword = action.payload
            return { ...state };
        }
        case ADD_USER: {
            let userList = [...state.userList]
            if (action.payload.id) {
                const index = userList.findIndex((item) => item.id === action.payload.id)
                if (index !== -1) {
                    userList[index] = action.payload
                }
            } else {
                userList.push(action.payload)
            }
            state.userList = userList
            return { ...state }
        }
        case EDIT_USER: {
            state.userEdit = action.payload
            return { ...state }
        }

        default:
            return { ...state };
    }
};
export default userReducer;
