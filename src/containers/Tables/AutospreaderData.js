import React from 'react'
import firebase from 'firebase';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk", "cexio_euro"]
var spread = ''
var bal_str = ''
var test = []

class AutospreaderData extends React.Component {
  constructor(props) {
    super(props)
    this.datas = [];
    this.state = {
      prices: '',
      position: '',
      exchanges_array: [],
      prices_array: [],
      positions_array: [],
      bitfinex_arr: [],
    }
  }
  componentDidMount() {
    for (let ex = 0; ex < exchange_list.length; ex++) {
      let exc = exchange_list[ex]
      //fetching all the firebase data into priceRef
      var priceRef = firebase.database().ref(exc);
      priceRef.on('value', snapshot => {
        // console.log(snapshot.val());
        this.setState({
          prices: snapshot.val().prices,
          position: snapshot.val().positions.avail
        });
        // console.log(this.state.prices)
        test[ex] = this.state.prices
        // var ask = this.state.prices_array.ask
        var ask = (parseFloat(Math.round(this.state.prices.ask * 10) / 10) * parseFloat(this.state.prices.currency_multiplier)).toFixed(1)
        var bid = (parseFloat(Math.round(this.state.prices.bid * 10) / 10) * parseFloat(this.state.prices.currency_multiplier)).toFixed(1)
        this.state.prices_array[ex] = this.state.prices
        this.state.positions_array[ex] = this.state.position
        //Changing unix timeformat to ISO
        var date1 = this.state.prices.last_update_time
        var date_needed = new Date(date1 * 1e3).toISOString().slice(-13, -2);
        //Balances string dispalying BTC,USD
        bal_str = this.state.positions_array[ex]
        this.build_string_from_dict(bal_str)

        this.state.prices_array[ex].ask = ask
        this.state.prices_array[ex].bid = bid
        this.state.prices_array[ex].exchange = exchange_list[ex]
        this.state.prices_array[ex].balance = this.build_string_from_dict(bal_str)
        this.state.prices_array[ex].date = date_needed
        // console.log(typeof test)
        // console.log(test)
      })
    }
    var arr = []
    arr = this.state.prices_array
    this.spreadCal(arr)
  }
  spreadCal(arr) {
    arr = this.state.prices_array
    for (var i = 0; i < arr.length; i++) {
      console.log("hiiiiiiiiiiiiiiiiiiiii")
    }

    // console.log("Im here")
    // console.log(typeof arr)
    // console.log(arr)
    // console.log(typeof this.state.prices_array)
    // console.log(this.state.prices_array)

    var first_ex_ask = arr["ask"]
    var first_ex_bid = arr.bid
    for (var i in this.state.prices_array) {
      var second_ex_ask = this.state.prices_array[i].ask
      var second_ex_bid = this.state.prices_array[i].bid
      var first_ex_avg = (first_ex_ask + first_ex_bid) / 2;
      var second_ex_avg = (second_ex_ask + second_ex_bid) / 2;
      spread = (((first_ex_avg - second_ex_avg) * 100) / ((first_ex_avg + second_ex_avg) / 2)).toFixed(2);
      this.state.bitfinex_arr.push(spread)
    }
    // console.log(this.state.bitfinex_arr)
  }
  // To get balances
  build_string_from_dict(bal_str) {
    var buildString = "";
    for (var key in bal_str) {
      if (key === "XBTUSD") {
        buildString = buildString + key + " " + bal_str[key].toFixed(0) + " ";
      } else {
        buildString = buildString + key + " " + bal_str[key].toFixed(2) + "  ";
      }
    }
    return buildString;
  }

  render() {
    return (
      <div>
        <card />
        <div>
          <BootstrapTable data={this.state.prices_array}>
            <TableHeaderColumn isKey dataField='exchange'> Exchanges</TableHeaderColumn>
            <TableHeaderColumn dataField='balance'>Balances </TableHeaderColumn>
            <TableHeaderColumn dataField='ask'>Ask </TableHeaderColumn>
            <TableHeaderColumn dataField='bid'>Bid </TableHeaderColumn>
            <TableHeaderColumn dataField='date'>Last Update </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}
export default AutospreaderData; 