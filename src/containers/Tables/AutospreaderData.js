import React from 'react'
import firebase from 'firebase';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './styleGrid.css'
import MpsTable from './MpsTable'

let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk", "cexio_euro"]
let bal_str = '';

class AutospreaderData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid_array: {},
    }
  }
  componentDidMount() {
    for (let ex = 0; ex < exchange_list.length; ex++) {
      let exc = exchange_list[ex]
      //fetching all the firebase data into priceRef
      let priceRef = firebase.database().ref(exc);
      priceRef.on('value', snapshot => {
        let prices = snapshot.val().prices;
        let positions = snapshot.val().positions.avail
        //calculating ask and bid values
        let ask = (parseFloat(Math.round(prices.ask * 10) / 10) * parseFloat(prices.currency_multiplier)).toFixed(1)
        let bid = (parseFloat(Math.round(prices.bid * 10) / 10) * parseFloat(prices.currency_multiplier)).toFixed(1)
        //Changing unix timeformat to ISO
        let date1 = prices.last_update_time
        let date_needed = (new Date(date1 * 1e3)).toISOString().slice(-13, -2);
        //Balances string dispalying BTC,USD
        bal_str = positions

        prices.ask = ask
        prices.bid = bid
        prices.exchange = exchange_list[ex]
        // prices.balance = this.build_string_from_dict(bal_str)
        prices.balance = bal_str;
        prices.date = date_needed

        let grid_array = {
          ...this.state.grid_array,
          [exc]: prices
        };
        this.setState({ grid_array })
      })
    }
    console.log(new Date().toUTCString())
  }
  //Calculating spread for exchanges based on ask and bid values
  spreadCal(arr) {
    let spread_exc_arr = []
    for (let i in arr) {
      let min_array = {}
      // min_array['name'] = arr[i].exchange;
      // console.log(arr[i].ask);
      var first_ex_ask = parseFloat(arr[i].ask)
      var first_ex_bid = parseFloat(arr[i].bid)
      for (var j in arr) {
        var second_ex_ask = parseFloat(arr[j].ask)
        var second_ex_bid = parseFloat(arr[j].bid)
        var first_ex_avg = (first_ex_ask + first_ex_bid) / 2;
        var second_ex_avg = (second_ex_ask + second_ex_bid) / 2;
        let spread = (((first_ex_avg - second_ex_avg) * 100) / ((first_ex_avg + second_ex_avg) / 2)).toFixed(2);
        if (i == j) {
          min_array[j] = Infinity;
        } else {
          min_array[j] = spread
        }
      }
      spread_exc_arr.push(min_array)
    }
    return spread_exc_arr
  }
  
  flattenObject() {
    let data = this.state.grid_array;
    let prices_array = [];
    Object.keys(data).forEach((key) => {
      prices_array.push(data[key]);
    })
    return prices_array;
  }

  //date is converted from unix timestamp to UTC 
  dateFormatter(fieldValue, row, rowIdx, colIdx) {
    let a = fieldValue.split('.');
    let b = a[0].split(':');
    let Dat1 = new Date();
    let Dat2 = Date.UTC(Dat1.getUTCFullYear(), Dat1.getUTCMonth(), Dat1.getUTCDate(), b[0], b[1], b[2], a[1]);
    return Number(Dat1) - Dat2 > 2 * 60 * 1000 ? 'danger_text' : '';
  }

  //Displaying balances column in grid
  positionsFormatter(cell, row) {
    // console.log({cell});
    let dat = ["<ul class='balance_style'>"];
    Object.keys(cell).forEach(key => {
      dat.push(`<li>${key} ${cell[key].toFixed(2)}</li>`)
    })
    dat.push('</ul>')
    return dat.join("");
  }

  //Makes the cells in grid as grey if same exchange
  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    // fieldValue is column value
    // row is whole row object
    // rowIdx is index of row
    // colIdx is index of column
    // console.log({fieldValue, row, rowIdx, colIdx})
    return fieldValue == Infinity ? 'cellStyling' : '';
  }

  render() {
    let prices_array = this.flattenObject()
    let spread = this.spreadCal(prices_array)

    //array with both data of exchanges(ask,bid) and also calculations of spread based on ask and bid
    let grid = [];
    prices_array.forEach((itm, i) => {
      grid.push(Object.assign({}, itm, spread[i]));
    });


    return (
      <div>
          <BootstrapTable data={grid}>
          <TableHeaderColumn isKey dataField='exchange'> Exchanges</TableHeaderColumn>
          <TableHeaderColumn dataField='balance' dataFormat={this.positionsFormatter} width='12%' >Balances </TableHeaderColumn>
          <TableHeaderColumn dataField='bid' dataAlign="center">Bid </TableHeaderColumn>
          <TableHeaderColumn dataField='ask' dataAlign="center">Ask </TableHeaderColumn>
          <TableHeaderColumn dataField='date' dataAlign="center" columnClassName={this.dateFormatter} >Last Update </TableHeaderColumn>
          <TableHeaderColumn dataField='0' columnClassName={this.columnClassNameFormat} dataAlign="center">Bitfinex </TableHeaderColumn>
          <TableHeaderColumn dataField='1' columnClassName={this.columnClassNameFormat} dataAlign="center">Bitmex </TableHeaderColumn>
          <TableHeaderColumn dataField='2' columnClassName={this.columnClassNameFormat} dataAlign="center">Cexio </TableHeaderColumn>
          <TableHeaderColumn dataField='3' columnClassName={this.columnClassNameFormat} dataAlign="center">Flyer </TableHeaderColumn>
          <TableHeaderColumn dataField='4' columnClassName={this.columnClassNameFormat} dataAlign="center">Flyer_Fx </TableHeaderColumn>
          <TableHeaderColumn dataField='5' columnClassName={this.columnClassNameFormat} dataAlign="center">Coinfloor_uk</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
export default AutospreaderData; 