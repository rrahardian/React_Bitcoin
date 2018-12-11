import React, { Component } from 'react';
import axios from 'axios'

class BtcToday extends Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        axios.get('https://blockchain.info/ticker')
            .then((info) => {
                this.setState({
                    data: info.data
                })
            })
    }

    render() {

        return (
            <div className="m-3 w-75">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Mata Uang</th>
                            <th scope="col">Harga Beli Bitcoin</th>
                            <th scope="col">Harga Jual Bitcoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Dollar Australia</th>
                            <td>{this.state.data ? this.state.data.AUD.buy : ''}</td>
                            <td>{this.state.data ? this.state.data.AUD.sell : ''}</td>
                        </tr>
                        <tr>
                            <th scope="row">Yuan China</th>
                            <td>{this.state.data ? this.state.data.CNY.buy : ''}</td>
                            <td>{this.state.data ? this.state.data.CNY.sell : ''}</td>
                        </tr>
                        <tr>
                            <th scope="row">Euro Eropa</th>
                            <td>{this.state.data ? this.state.data.AUD.buy : ''}</td>
                            <td>{this.state.data ? this.state.data.AUD.sell : ''}</td>
                        </tr>
                        <tr>
                            <th scope="row">Dolar Amerika Serikat</th>
                            <td>{this.state.data ? this.state.data.USD.buy : ''}</td>
                            <td>{this.state.data ? this.state.data.USD.sell : ''}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BtcToday;
