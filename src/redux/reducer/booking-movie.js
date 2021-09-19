import data from '../../booking-movie/danhSachGhe.json'
const bookingMovieSate = {
    listSeat: data,
    listBookingSeat: [],

}

const bookingMovieReducer = (state = bookingMovieSate, action) => {
    switch (action.type) {
        case "BOOKED_SEAT": {
            let listBookingSeat = [...state.listBookingSeat]
            const index = listBookingSeat.findIndex(item => item.soGhe === action.payload.soGhe)
            if (index !== -1) {
                listBookingSeat.splice(index, 1)
            } else {
                listBookingSeat.push(action.payload)
            }
            state.listBookingSeat = listBookingSeat
            return { ...state }
        }
        case "DELETE_SEAT": {
            let listBookingSeat = [...state.listBookingSeat]
            const index = listBookingSeat.findIndex(item => item.soGhe === action.payload.soGhe)
            if (index !== -1) {
                listBookingSeat.splice(index, 1)
            }
            state.listBookingSeat = listBookingSeat
            return { ...state }
        }


        default:
            return { ...state };
    }

}
export default bookingMovieReducer