import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGhe extends Component {
    renderTable = () => {
        const { listBookingSeat } = this.props
        return listBookingSeat.map((seat, index) => {
            return (
                <tr key={index}>
                    <td className="firstChar border">{seat.soGhe}</td>
                    <td className="firstChar border">{seat.gia}</td>
                    <td>
                        <button className="btn btn-primary"
                            onClick={() => { this.props.deleteSeat(seat) }}>Huy</button>
                    </td>
                </tr>
            )
        })
    }
    total = () => {
        return this.props.listBookingSeat.reduce((total, item) => total += item.gia, 0)
    }

    render() {
        return (
            <div className="bookingMovie text-center">
                <h2 className="text-light pt-5">
                    DANH SACH GHE BAN CHON
                </h2>

                <div className="text-left">
                    <button className="gheDuocChon"></button>
                    <span className="text-light ml-2">Ghe da dat</span>
                </div>

                <div className="text-left my-3">
                    <button className="gheDangChon"></button>
                    <span className="text-light ml-2">Ghe dang chon</span>
                </div>

                <div className="text-left my-3">
                    <button className="ghe"></button>
                    <span className="text-light ml-2">Ghe chua dat</span>
                </div>
                <table className="table border">
                    <thead>
                        <tr className="text-light">
                            <th className="border" style={{ fontSize: "30px" }}>So ghe</th>
                            <th className="border" style={{ fontSize: "30px" }}>Gia</th>
                            <th className="border" style={{ fontSize: "30px" }}>Huy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                        <tr>
                            <td className="text-light border" style={{ fontSize: "30px" }}>Tong tien</td>
                            <td className="firstChar border">{this.total()}</td>
                            <td className="text-warning border"></td>
                        </tr>
                    </tbody>
                </table>
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
        deleteSeat: (seat) => {
            dispatch({
                type: "DELETE_SEAT",
                payload: seat,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe)