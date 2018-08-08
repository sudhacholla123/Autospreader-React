import React from 'react';
import Button from "../../components/uielements/button";
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import Collapses from '../../components/uielements/collapse';
import CollapseWrapper from '../Uielements/Collapse/collapse.style';
import Box from '../../components/utility/box';
import { Col, Row, Icon } from 'antd';
import Input, {
    InputSearch,
    InputGroup,
    Textarea
} from '../../components/uielements/input';
import Select, { SelectOption } from '../../components/uielements/select';
import PageHeader from '../../components/utility/pageHeader';
import Radio, { RadioGroup } from '../../components/uielements/radio';
import { rtl } from '../../settings/withDirection';
import MpsTable from '../Tables/MpsTable'
import RoutineGroup from './RoutineGroup';
import Tabs, { TabPane } from '../../components/uielements/tabs';

function callback(key) { }
const text = <IntlMessages id="uiElements.collapse.text" />;

const Panel = Collapses.Panel;
const Collapse = props => (
    <CollapseWrapper>
        <Collapses {...props}>{props.children}</Collapses>
    </CollapseWrapper>
);
//To display Place order button and onClick it will render to RoutineGroup Component
class PlaceOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            checked: true,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    isChecked() {
        this.setState({
            checked: false,
        });
    }


    render() {
        const { rowStyle, colStyle, gutter } = basicStyle;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        if (this.state.showComponent) {
            return (<RoutineGroup />)
        } else {
            return (
                <div style={{ paddingTop: 0 }}>
                    <LayoutWrapper>
                        <Row style={rowStyle} gutter={gutter} justify="start">
                            <Col span={24} style={colStyle}>
                                <ContentHolder>
                                    <Collapse accordion>
                                        <Panel
                                            header={<IntlMessages id="uiElements.collapse.headerOne" />}
                                            key="1" >
                                            <p>{

                                                <Tabs defaultActiveKey="1" onChange={callback}>
                                                    <TabPane tab="Choose template for strategy" key="1">
                                                        <ContentHolder>
                                                            <Radio onClick={this.isChecked}>Blank</Radio>
                                                            <br />
                                                            <Radio defaultChecked={false} disabled>
                                                                Disabled
                                                                        </Radio>
                                                            <br />
                                                            <Radio defaultChecked={false} disabled>
                                                                Disabled
                                                                        </Radio>
                                                        </ContentHolder> <br />
                                                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 45 }}>
                                                            <Button type="primary" onClick={this.onButtonClick} className="isoOrderBtn" disabled={this.state.checked}>
                                                                Next
                                                                </Button>
                                                        </div>
                                                    </TabPane>
                                                </Tabs>
                                            }</p>
                                        </Panel>
                                    </Collapse>
                                </ContentHolder>
                            </Col>
                        </Row>
                    </LayoutWrapper>
                </div>
            )
        }
    }
}
export default PlaceOrder