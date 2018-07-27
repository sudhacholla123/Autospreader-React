import React from 'react'
import firebase from 'firebase';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import AutospreaderData from './AutospreaderData';
import SpreadComOrders from './SpreadComOrders'
import MpsTable from './MpsTable'


let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk"];
let currency_list = ["GBPUSD", "JPYUSD"]

class card extends React.Component {
  constructor(props) {
    super()
    this.state = {
      latency: '',
      latency_array: [],
      mps: '',
      mps_array: [],
      mps_fx_arr: [],
      mps_date: ''
    }
  }

  componentDidMount() {
    //MPS Table
    for (let ex = 0; ex < exchange_list.length; ex++) {
      let exc = exchange_list[ex]

      var latencyRef = firebase.database().ref(exc);
      latencyRef.on('value', snapshot => {
        this.setState({
          latency: parseFloat(snapshot.val().latency).toFixed(2),
          mps: parseFloat(snapshot.val().mps).toFixed(2)
        });

        this.state.latency_array[ex] = this.state.latency
        this.state.mps_array[ex] = this.state.mps
      })
    }
    for (var i in currency_list) {
      var rate = "data_points/fiat_currencies/" + currency_list[i]
      var rateRef = firebase.database().ref(rate);
      rateRef.on('value', snapshot => {
        this.setState({
          mps_fx: parseFloat(snapshot.val().rate).toFixed(5),
          mps_date: snapshot.val().last_updated_time
        });
        // console.log(this.state.mps_fx);
        this.state.mps_fx_arr[i] = this.state.mps_fx
      })
    }
    // console.log(this.state.latency_array);
    // console.log(this.state.mps_fx_arr);
  }

  render() {
    return (
      <div>
        <div>
          {/* {displaying grid} */}
          <AutospreaderData />
        </div>
        <div>
          {/* {this.state.latency_array.map(i => <Panel><li key={i}> {i} </li></Panel>)} */}
          <MpsTable />
        </div>
        {/* {displaying spread logs} */}
        <SpreadComOrders />
      </div>
    )
  }
}
export default card;              