import React from 'react'
import firebase from 'firebase';
import { Panel } from '../../../node_modules/react-instantsearch/dom';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { Col, Row, Icon } from 'antd';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';

var time_display = '';

var append_list = [];
var spreadlog_list = [];
var holder_dict = [];
var jsonString = '';
var arr = [];
let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk"];
let currency_list = ["GBPUSD", "JPYUSD"]
var newArr = [];
var mps_array = [];


class SpreadComOrders extends React.Component {
    constructor(props) {
        super()
        this.state = {
            items: [],
            items_array: [],
            price: '',
            position: '',
            exchanges_array: [],
            prices_array: [],
            positions_array: [],
            logs: '',
            log_array: [],
            holder: '',
            latency: '',
            latency_array: [],
            mps: '',
            mps_array: [],
            mps_fx_arr: [],
            mps_date: ''
        }
    }

    componentDidMount() {
        //Fetching data from firebase : general_completed_working_orders
        const spreadRef = firebase.database().ref("general_completed_working_orders").limitToLast(50);
        spreadRef.on('value', snapshot => {
            this.setState({
                items: snapshot.val()
            })
            //Formatting unix timestamp to UTC date
            for (var item in this.state.items) {
                spreadlog_list.unshift(this.state.items[item]);
            }
            spreadlog_list.sort(function (first, second) {
                return second.server_time - first.server_time;
            });
            for (var i = 0; i < spreadlog_list.length; i++) {
                var work_leg_name = spreadlog_list[i].work.name;
                var hedge_leg_name = spreadlog_list[i].hedge.name;
                var work_price = spreadlog_list[i].work.price;
                var adjusted_work_price = parseFloat(work_price);
                var hedge_price = spreadlog_list[i].hedge.price;
                var adjusted_hedge_price = parseFloat(hedge_price);
                var work_quantity = spreadlog_list[i].work.quantity;
                var adjusted_work_quantity = work_quantity;
                var hedge_quantity = spreadlog_list[i].hedge.quantity;
                var adjusted_hedge_quantity = hedge_quantity;
                var order_id = spreadlog_list[i].external_working_id;
                var spread_to_show = 200 * (parseFloat(adjusted_work_price) - parseFloat(adjusted_hedge_price)) / (parseFloat(adjusted_hedge_price) + parseFloat(adjusted_work_price));
                spread_to_show = spread_to_show.toFixed(2);
                var time_stamp = spreadlog_list[i].server_time;
                var dim = new Date(time_stamp * 1000);
                var sdate = dim.getUTCDate();
                var smonth = dim.getUTCMonth();
                var syear = dim.getUTCFullYear();
                var shour = dim.getUTCHours();
                var sminutes = dim.getUTCMinutes();
                var sseconds = dim.getUTCSeconds();
                if (shour < 10) {
                    shour = '0' + shour;
                }
                if (sminutes < 10) {
                    sminutes = '0' + sminutes;
                }
                if (sseconds < 10) {
                    sseconds = '0' + sseconds;
                }
                var time_display = sdate + '-' + (smonth + 1) + '-' + syear + " " + shour + ":" + sminutes + ":" + sseconds;
                spreadlog_list[i].spread = spread_to_show
                spreadlog_list[i].time_to_display = time_display
            }
        })
        // -----------------------------------------------------------------------------------------------------------------------    
        //fetching autospreader log values from firebase
        var autospreaderRef = firebase.database().ref("log/general").limitToLast(100);
        autospreaderRef.on('value', snapshot => {
            // console.log(snapshot.val());
            this.setState({
                logs: snapshot.val()
            });

            for (var item in this.state.logs) {
                append_list.unshift(this.state.logs[item]);
            }
            append_list.sort(function (first, second) {
                return second.time_unix - first.time_unix;
            });
        })
        //-----------------------------------------------------------------------------------------------------------------------
        //MPS Table
        for (let ex = 0; ex < exchange_list.length; ex++) {
            let exc = exchange_list[ex]

            var latencyRef = firebase.database().ref(exc);
            latencyRef.on('value', snapshot => {
                this.setState({
                    latency: parseFloat(snapshot.val().latency).toFixed(2),
                    mps: parseFloat(snapshot.val().mps).toFixed(2)
                });
            })
        }
    }

    render() {
        const rowStyle = {
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap'
        };
        const colStyle = {
            marginBottom: '16px'
        };
        const gutter = 16;
        return (
            <div>
                <card />
                {/* {displaying spread logs} */}
                <LayoutWrapper>
                    <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col md={12} sm={12} xs={24} style={colStyle}>
                            <Box
                                title={<IntlMessages id="uiElements.cards.loadingCard" />}>
                                <ContentHolder>
                                    <div>
                                        {spreadlog_list.map(i => <Panel> <li key={i.id}><b> {i.time_to_display} | {i.external_working_id}</b>
                                            <p>{i.plus_minus}{i.work.quantity}(QTY) | {i.spread}% (SPREAD) {i.work.name}(WORKING) | {i.work.price}(W-PRICE)
                                        {i.hedge.name}(HEDGE) | {i.hedge.price}(H-PRICE)</p></li></Panel>)}
                                    </div>
                                </ContentHolder>
                            </Box>
                        </Col>
                        <Col md={12} sm={12} xs={24} style={colStyle}>
                            <Box
                                title={
                                    <IntlMessages id="uiElements.cards.customizedContentTitle" />}>
                                {/* {dispalying autospreader logs} */}
                                <ContentHolder>
                                    <div>
                                        {append_list.map(i => <Panel><li key={i}> {i.time_readable} | {i.text} </li></Panel>)}
                                    </div>
                                </ContentHolder>
                            </Box>
                        </Col>
                    </Row>
                </LayoutWrapper>
            </div>
        )
    }
}
export default SpreadComOrders;              