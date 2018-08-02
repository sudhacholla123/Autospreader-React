//To display the orders in order details card
import React from 'react'
import firebase from 'firebase';
import Box from '../../components/utility/box';
import { Col, Row, Icon } from 'antd';

let exchange_list = ["bitfinex", "bitmex", "cexio", "flyer", "flyer_fx", "coinfloor_uk", "cexio_euro"]

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders_array: {},
        }
    }
    componentDidMount() {
        for (let ex = 0; ex < exchange_list.length; ex++) {
            let exc = exchange_list[ex]
            //fetching all the firebase data into ordersRef
            let ordersRef = firebase.database().ref(exc);
            ordersRef.on('value', snapshot => {
                let orders = snapshot.val().orders;
                let orders_array = {
                    ...this.state.orders_array,
                    [exc]: orders
                };
                this.setState({ orders_array })
            })
        }
    }
    flattenObject() {
        let data = this.state.orders_array;
        let orders_object = {};
        let orders_array = [];
        Object.keys(data).forEach((key) => {
            orders_object = {
                ...this.state.orders_array,
                [key]: data[key]
            };
        })
        return orders_object;
    }

    render() {
        let orders_obj = this.flattenObject()
        let ui_comp = [] //Stores the whole html part data_comp including the title of the exchange!
        let data_comp = [] //goes with internal data for each exchange
        {
            Object.keys(orders_obj).map((item, key) => {
                let temp = ''
                let length_od_obj = orders_obj[item] == undefined ? undefined : Object.keys(orders_obj[item]).length
                data_comp = []
                if (length_od_obj != undefined && length_od_obj > 0) {
                    let orders = Object.keys(orders_obj[item])
                    orders.map((item2, key2) => {
                        if (orders_obj[item][item2]['external_id'] == "") {
                            data_comp.push(<div className='indent'><br />
                                price:{orders_obj[item][item2]['price']} (Price) | {orders_obj[item][item2]['side']} (Side) |
                               <br />
                                {orders_obj[item][item2]['orderQty']}(Qty)<br />
                            </div>
                            )
                        }
                        else {
                            data_comp.push(<div className='indent'><br />
                                {orders_obj[item][item2]['external_id']}<br />
                                {orders_obj[item][item2]['required_spread']}(Spread) | {orders_obj[item][item2]['price']} (Price)<br />
                                {orders_obj[item][item2]['side']} (Side) |  orderQty:{orders_obj[item][item2]['orderQty']} (Qty)<br />
                                {orders_obj[item][item2]['hedge_exchange']} (Hedge)<br />
                            </div>
                            )
                        }
                    })
                } else {
                    data_comp.push()
                }
                ui_comp.push(<Row><Col md={8} sm={8} xs={24} style={{ padding: '0 8px' }}>
                    <Box><div className="indent"><b>{item} orders</b>:<br />{data_comp}</div></Box></Col></Row>)
            })
        }
        return (
            ui_comp
        )
    }
}
export default Orders;