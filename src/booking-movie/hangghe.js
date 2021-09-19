import React, { Component } from 'react'
import { connect } from 'react-redux';


class HangGhe extends Component {
    renderRowSeat = () => {
        const { nameSeat, numberSeat, listBookingSeat } = this.props
        return nameSeat.danhSachGhe.map((seat, index) => {
            let cssSeatChoose = '';
            let disabled = '';
            if (seat.daDat) {
                cssSeatChoose = 'gheDuocChon'
                disabled = true
            }

            let cssSeat = ''
            const indexSeat = listBookingSeat.findIndex(item => item.soGhe === seat.soGhe)
            if (indexSeat !== -1) {
                cssSeat = 'gheDangChon'
            }

            if (numberSeat === 0) {
                return <span key={index} className="rowNumber">{seat.soGhe}</span>
            } else {
                return <button key={index} className={`ghe mx-2 ${cssSeatChoose} ${cssSeat}`}
                    onClick={() => { this.props.bookedSeat(seat) }}
                    disabled={disabled}>
                    {index}
                </button>
            }

        })
    }

    render() {
        const { nameSeat } = this.props
        return (
            <div className="bookingMovie m-2 text-left text-warning" style={{ fontSize: "27px" }}>
                {nameSeat.hang}{this.renderRowSeat()}
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listBookingSeat: state.bookingMovieReducer.listBookingSeat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        bookedSeat: (seat) => {
            dispatch({
                type: "BOOKED_SEAT",
                payload: seat,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)