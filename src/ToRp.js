import React, { Component } from 'react';
import axios from 'axios'

class ToRp extends Component {
    state = {
        usd: 0,
        bitcoin: 0,
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
                bitcoin: e.target.value,
                usd: this.state.data.USD.buy
            })
        }

        let konversi = (this.state.usd * 14000)

        return (
            <div>
                <input className="rounded mb-3" type="number" onInput={input}></input>
                <h4>BTC {this.state.bitcoin} = Rp. {konversi}</h4>
            </div>
        );
    }
}

export default ToRp;
