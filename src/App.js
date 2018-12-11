import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import BtcToday from './BtcToday'
import ToBtc from './ToBtc'
import ToRp from './ToRp'
import './css/index.css'
import './css/bootstrap.css'

class App extends Component {
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
      <center>
        <div className="my-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_kpanR-he5UsdvnxQL7ua8Fm0FNGUM4LZ4df0Mt1ADlLXFzHpw" alt="" />
          <br />
          <div class="card text-center w-75 my-3">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <Link to="/btc-today" class="nav-link">BTC Today</Link>
                </li>
                <li class="nav-item">
                  <Link to="/to-btc" class="nav-link">Rp to BTC</Link>
                </li>
                <li class="nav-item">
                  <Link to="/to-rp" class="nav-link">BTC to Rp</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <Link to="/btc-today"><button>Btc Today</button></Link>
          <Link to="/to-btc"><button>Rp to Btc</button></Link>
          <Link to="/to-rp"><button>Btc to Rp</button></Link> */}
          <Route path="/btc-today" component={BtcToday} />
          <Route path="/to-btc" component={ToBtc} />
          <Route path="/to-rp" component={ToRp} />
        </div >
      </center>
    )
  }
}

export default App