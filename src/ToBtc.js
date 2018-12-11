import React, { Component } from 'react';
import axios from 'axios'

class ToBtc extends Component {
    state = {
        rupiah: 0,
        usd: 0,
        info: ''
    }

    componentDidMount() {
        axios.get('https://blockchain.info/ticker')
            .then((info) => {
                this.setState({
                    data: info.data,
                })
            })
    }

    render() {
        let input = (e) => {
            this.setState({
                rupiah: e.target.value,
                usd: this.state.data.USD.buy
            })
        }

        let konversi = (this.state.rupiah / 14000) / (this.state.usd)

        return (
            <div>
                <input className="rounded mb-3" type="number" onInput={input}></input>
                <h4>Rp. {this.state.rupiah} = BTC {konversi}</h4>
            </div>
        );
    }
}

export default ToBtc;
