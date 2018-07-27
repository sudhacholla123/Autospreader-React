import React from 'react'
import firebase from 'firebase';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk", "cexio_euro"];
let currency_list = ["GBPUSD", "JPYUSD", "EURUSD"]
var fiat_values = ''
var buildString = "", date = "", date_needed = "", rate = "", index = "";

class card extends React.Component {
    constructor(props) {
        super()
        this.state = {
            mps_values: '',
            latency_array: [],
            mps: '',
            mps_array: [],
            mps_fx_arr: [],
            mps_date: '',
            fiat_values: '',
            logs: ''
        }
    }

    componentDidMount() {
        //MPS Table
        //fetching mps and latency values from firebase (url, exc:"bitmex")
        for (let ex = 0; ex < exchange_list.length; ex++) {
            let exc = exchange_list[ex]
            var mpsValuesRef = firebase.database().ref(exc);
            mpsValuesRef.on('value', snapshot => {
                this.setState({
                    mps_values: snapshot.val()
                });
                this.state.latency_array[ex] = this.state.mps_values
                var latency = parseFloat(this.state.mps_values.latency).toFixed(2)
                var mps = parseFloat(this.state.mps_values.mps).toFixed(2)
                this.state.latency_array[ex].exchange = exchange_list[ex]
                this.state.latency_array[ex].latency1 = latency
                this.state.latency_array[ex].mps1 = mps
                // console.log("starrt")
                var rateRef = firebase.database().ref("data_points/fiat_currencies");
                rateRef.on('value', snapshot => {
                    this.setState({
                        fiat_values: snapshot.val()
                    });
                    fiat_values = this.state.fiat_values
                    // console.log("here1")
                    //getting corresponding fx and fx_update_time to particular exchange
                    // if (this.state.latency_array.some(item => "coinfloor_uk" === item.exchange)) {
                    //     index = this.getIndex("coinfloor_uk", this.state.latency_array, "exchange")
                    //     for (var key in fiat_values) {
                    //         if (key === "GBPUSD") {
                    //             buildString = buildString + key;
                    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    //             rate = fiat_values[key].rate
                    //         }
                    //         this.state.latency_array[index].date_needed = date_needed;
                    //         this.state.latency_array[index].rate = rate

                    //     }
                    // }
                    // // console.log("here2")
                    // if (this.state.latency_array.some(item => "flyer" === item.exchange)) {
                    //     index = this.getIndex("flyer", this.state.latency_array, "exchange")
                    //     for (var key in fiat_values) {
                    //         if (key === "JPYUSD") {
                    //             buildString = buildString + key;
                    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    //             rate = fiat_values[key].rate
                                
                    //         }
                    //         this.state.latency_array[index].date_needed = date_needed;
                    //         this.state.latency_array[index].rate = rate
                    //     }
                    // }
                    // // console.log("here3")
                    // if (this.state.latency_array.some(item => "flyer_fx" === item.exchange)) {
                    //     index = this.getIndex("flyer_fx", this.state.latency_array, "exchange")
                    //     for (var key in fiat_values) {
                    //         if (key === "JPYUSD") {
                    //             buildString = buildString + key;
                    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    //             rate = fiat_values[key].rate
                    //             break;
                    //         }
                    //         this.state.latency_array[index].date_needed = date_needed;
                    //         this.state.latency_array[index].rate = rate
                    //     }
                    // }

                    // if (this.state.latency_array.some(item => "cexio_euro" === item.exchange)) {
                    //     // console.log("here4")
                    //     index = this.getIndex("cexio_euro", this.state.latency_array, "exchange")
                    //     for (var key in fiat_values) {
                    //         if (key === "EURUSD") {
                    //             buildString = buildString + key;
                    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
                    //             rate = fiat_values[key].rate
                                
                    //         }
                    //         this.state.latency_array[index].date_needed = date_needed;
                    //         this.state.latency_array[index].rate = rate
                    //     }
                    // }
                    // this.build_string_from_dict(fiat_values)
                    // console.log("here5")
                    // console.log(this.state.latency_array)
                })
            })
 
        }
    }
    //function returns paerticular index of the exchange
    getIndex(value, arr, prop) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
    }

    // build_string_from_dict(fiat_values) {
    //     for (var key in fiat_values) {
    //         if (key === "GBPUSD") {
    //             buildString = buildString + key ;
    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
    //             rate = fiat_values[key].rate
    //             if(this.state.latency_array.some(item => "coinfloor_uk" === item.exchange)) {

    //             }  
    //         } else if (key === "JPYUSD") {
    //             buildString = buildString + key ;
    //             date_needed = new Date(fiat_values[key].last_updated_time * 1e3).toISOString().slice(-13, -2);
    //             rate = fiat_values[key].rate
    //             if(this.state.latency_array.some(item => "flyer" === item.exchange)) {
    //                 this.state.latency_array[3].date_needed = date_needed;
    //                 this.state.latency_array[3].rate = rate
    //             }  
    //         }
    //     }
    // }

    render() {
        return (
            <div>
                <div>
                    <card />
                    {/* rendering mps status table data */}
                    <BootstrapTable data={this.state.latency_array}>
                        <TableHeaderColumn isKey dataField='exchange'> Exchange</TableHeaderColumn>
                        <TableHeaderColumn dataField='rate'>FX</TableHeaderColumn>
                        <TableHeaderColumn dataField='date_needed'>FX UPDATE TIME</TableHeaderColumn>
                        <TableHeaderColumn dataField='mps1'>MPS</TableHeaderColumn>
                        <TableHeaderColumn dataField='latency1'>LAT</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}
export default card;              