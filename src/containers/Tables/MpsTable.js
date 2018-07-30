import React from 'react'
import firebase from 'firebase';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk"];
let currency_list = ["GBPUSD", "JPYUSD", "EURUSD"]

class card extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mps_status_arr: {},
            fiat_values: []
        }
    }

    componentDidMount() {
        //MPS Table
        //fetching mps and latency values from firebase (url, exc:"bitmex")
        for (let ex = 0; ex < exchange_list.length; ex++) {
            let exc = exchange_list[ex]
            let mpsValuesRef = firebase.database().ref(exc);
            mpsValuesRef.on('value', snapshot => {
                let mps_values = snapshot.val()
                mps_values.exchanges = exc
                mps_values.latency = parseFloat(mps_values.latency).toFixed(2)
                mps_values.mps = parseFloat(mps_values.mps).toFixed(2)

                let mps_status_arr = {
                    ...this.state.mps_status_arr,
                    [exc]: mps_values
                };
                this.setState({ mps_status_arr })
            })
            
            let rateRef = firebase.database().ref("data_points/fiat_currencies");
            rateRef.on('value', snapshot => {
                this.setState({fiat_values:snapshot.val()})
            })
        }

    }
    flattenObject() {
        let data = this.state.mps_status_arr;
        let mps_status = [];
        Object.keys(data).forEach((key) => {
            mps_status.push(data[key]);
        })
        return mps_status;
    }

    Foreign_X_Cal() {
        let index = '', rate = '', date_needed = '', buildString = ''
        let fiat_currencies = this.state.fiat_values
        let mps_status_arr = this.flattenObject()
        if (mps_status_arr.some(item => "coinfloor_uk" === item.exchanges)) {
            index = this.getIndex("coinfloor_uk", mps_status_arr, "exchanges")
            //hasOwnProperty
            for (let key in fiat_currencies) {
                if (key === "GBPUSD") {
                    buildString = buildString + key;
                    date_needed = new Date(fiat_currencies[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    rate = fiat_currencies[key].rate
                    mps_status_arr[index].date_needed = date_needed;
                    mps_status_arr[index].rate = rate
                }
            }
        }
        if (mps_status_arr.some(item => "flyer" === item.exchanges)) {
            index = this.getIndex("flyer", mps_status_arr, "exchanges")
            for (let key in fiat_currencies) {
                if (key === "JPYUSD") {
                    buildString = buildString + key;
                    date_needed = new Date(fiat_currencies[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    rate = fiat_currencies[key].rate
                    mps_status_arr[index].date_needed = date_needed;
                    mps_status_arr[index].rate = rate
                }
            }
        }
        if (mps_status_arr.some(item => "flyer_fx" === item.exchanges)) {
            index = this.getIndex("flyer_fx", mps_status_arr, "exchanges")
            for (let key in fiat_currencies) {
                if (key === "JPYUSD") {
                    buildString = buildString + key;
                    date_needed = new Date(fiat_currencies[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    rate = fiat_currencies[key].rate
                    mps_status_arr[index].date_needed = date_needed;
                    mps_status_arr[index].rate = rate
                }
            }
        }
        if (mps_status_arr.some(item => "cexio_euro" === item.exchanges)) {
            index = this.getIndex("cexio_euro", mps_status_arr, "exchanges")
            for (let key in fiat_currencies) {
                if (key === "EURUSD") {
                    buildString = buildString + key;
                    date_needed = new Date(fiat_currencies[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    rate = fiat_currencies[key].rate
                    mps_status_arr[index].date_needed = date_needed;
                    mps_status_arr[index].rate = rate
                }
            }
        }

    }

    //function returns particular index of the exchange
    getIndex(value, arr, prop) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
    }


    render() {
        let mps_status = this.flattenObject()
        this.Foreign_X_Cal()
        return (
            <div>
                <div>
                    {/* rendering mps status table data */}
                    <BootstrapTable data={mps_status}>
                        <TableHeaderColumn isKey dataField='exchanges'> Exchange</TableHeaderColumn>
                        <TableHeaderColumn dataField='rate'>FX</TableHeaderColumn>
                        <TableHeaderColumn dataField='date_needed'>FX UPDATE TIME</TableHeaderColumn>
                        <TableHeaderColumn dataField='mps'>MPS</TableHeaderColumn>
                        <TableHeaderColumn dataField='latency'>LAT</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}
export default card;              