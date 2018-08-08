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

class SpreadComOrders extends React.Component {
    constructor(props) {
        super()
        this.state = {
            spread_list: [],
        }
    }

    componentDidMount() {

        //fetching autospreader log values from firebase
        var autospreaderRef = firebase.database().ref("log/general").limitToLast(100);
        autospreaderRef.on('value', snapshot => {
            this.setState({
                logs: snapshot.val()
            });

            for (var item in this.state.logs) {
                append_list.unshift(this.state.logs[item]);
            }
            append_list.sort(function (first, second) {
                return second.time_unix - first.time_unix;
            });
            this.forceUpdate()
        })
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
                                title={
                                    <IntlMessages id="uiElements.cards.customizedContentTitle" />}>
                                {/* {dispalying autospreader logs} */}
                                <ContentHolder>
                                    <div>
                                        {
                                            append_list.map(i => <Panel><li key={i}> {i.time_readable} <br /> {i.text} </li></Panel>)}
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