import React, { Component } from 'react'
import ThongTinGhe from './thongtinghe'
import DanhSachGhe from './hangghe'
import './BaiTapBookingTicket.css'
import HangGhe from './hangghe'
import { connect } from 'react-redux'

class DatVeXemPhim extends Component {
    renderNameSeat = () => {
        const { listSeat } = this.props
        return listSeat.map((seat, index) => {
            return (
                <HangGhe key={index} nameSeat={seat} numberSeat={index} />
            )
        })
    }
    render() {
        return (
            <div className="background">
                <div className="overlay row">
                    <div className="col-7">
                        <div className="bookingMovie d-flex flex-column align-items-center">
                            <h2 className="text-warning pt-5">
                                DAT VE XEM PHIM CYBERLEARN.VN
                            </h2>
                            <h4 className="text-light mt-3">Man hinh</h4>
                            <div className="screen mb-3"></div>
                            {this.renderNameSeat()}
                        </div>

                    </div>

                    <div className="col-5">
                        <ThongTinGhe />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listSeat: state.bookingMovieReducer.listSeat
    }
}
export default connect(mapStateToProps, null)(DatVeXemPhim)