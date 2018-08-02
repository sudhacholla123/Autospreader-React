import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import { Debounce } from 'react-throttle';
import WindowResizeListener from 'react-window-size-listener';
import { ThemeProvider } from 'styled-components';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { siteConfig } from '../../settings';
import { AppLocale } from '../../dashApp';
import themes from '../../settings/themes';
import AppHolder from './commonStyle';
import './global.css';
import LayoutContentWrapper from "../../components/utility/layoutWrapper.js";
import Tabs, { TabPane } from '../../components/uielements/tabs';
import TableDemoStyle from '../Tables/antTables/demo.style';
import fakeData from '../Tables/fakeData';
import { tableinfos } from '../Tables/fbTables/configs';
import * as TableViews from '../Tables/antTables/tableViews/';

import { Col, Row, Icon } from 'antd';
import Input, {
  InputSearch,
  InputGroup,
  Textarea
} from '../../components/uielements/input';
import Select, { SelectOption } from '../../components/uielements/select';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import ContentHolder from '../../components/utility/contentHolder';
import IntlMessages from '../../components/utility/intlMessages';
import Button from "../../components/uielements/button";
import Card from '../Uielements/Card/card.style';
import AutospreaderData from '../Tables/AutospreaderData';
import SpreadComOrders from '../Tables/SpreadComOrders'
import MpsTable from '../Tables/MpsTable'
import Orders from '../Tables/Orders'
import Sys_resources from '../Tables/Sys_resources';
import Clock from 'react-live-clock';


const dataList = new fakeData(5);
// console.log(dataList);

const Option = SelectOption;

const { Content, Footer } = Layout;
const { logout } = authAction;
const { toggleAll } = appActions;
export class App extends Component {
  state = {
    dataSource: []
  };

  renderTable(tableInfo) {
    let Component;
    Component = TableViews.SimpleView;
    return <Component tableInfo={tableInfo} dataList={dataList} />;
  }
  render() {

    const { url } = this.props.match;
    const { locale, selectedTheme, height } = this.props;
    const currentAppLocale = AppLocale[locale];
    const appHeight = window.innerHeight;
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
      <LocaleProvider locale={currentAppLocale.antd}>
        <ThemeProvider theme={themes[selectedTheme]}>
          <AppHolder>
            <Layout style={{ height: appHeight }}>
              <Debounce time="1000" handler="onResize">
                <WindowResizeListener
                  onResize={windowSize =>
                    this.props.toggleAll(
                      windowSize.windowWidth,
                      windowSize.windowHeight
                    )
                  }
                />
              </Debounce>
              <Topbar url={url} />
              <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                <Sidebar url={url} />
                <Layout
                  className="isoContentMainLayout"
                  style={{
                    height: height
                  }}
                >
                  <Content
                    className="isomorphicContent"
                    style={{
                      padding: '70px 0 0',
                      flexShrink: '0',
                      background: '#f1f3f6',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 20, paddingTop: 20, paddingRight: 45 }}>
                      <Button type="primary" className="isoOrderBtn">
                        <b>Current Time (UTC):  {<Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} />}</b>
                      </Button></div>
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}><Sys_resources /></div>
                    <LayoutContentWrapper>
                      <TableDemoStyle className="isoLayoutContent">
                        <IntlMessages id="uiElements.cards.grid" />
                        <Tabs className="isoTableDisplayTab" >

                          {/* {tableinfos.map(tableInfo => (
                            <TabPane tab={tableInfo.title} key={tableInfo.value}>
                              {this.renderTable(tableInfo)}
                            </TabPane>
                          ))} */}
                          {/* To dispaly Grid */}
                          <AutospreaderData />
                        </Tabs>
                      </TableDemoStyle>
                    </LayoutContentWrapper>
                    <LayoutWrapper>

                      <PageHeader newProp="newPropValue">
                        <IntlMessages id="forms.input.header" />
                      </PageHeader>
                      <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col md={24} sm={24} xs={24} style={colStyle}>
                          <Box
                            subtitle={<IntlMessages id="forms.input.groupSubTitle" />}
                          >
                            <ContentHolder>
                              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                                <Col span="6">
                                  X
                                    <Input defaultValue="" />
                                </Col>
                                <Col span="6">
                                  Y
                                    <Input defaultValue="" />
                                </Col>
                                <Col span="6">
                                  <Col>WORK EX</Col>
                                  <Select defaultValue="Working-Order">
                                    <Option value="Zhejiang">Bitmex</Option>
                                    <Option value="Jiangsu">Bitfinex</Option>
                                    <Option value="Jiangsu">Cexio</Option>
                                    <Option value="Jiangsu">Flyer</Option>
                                  </Select>
                                </Col>
                                <Col span="6">
                                  <Col>WORK TRADING</Col>
                                  <Select defaultValue="Working-Order-Type">
                                    <Option value="Zhejiang">Margin</Option>
                                    <Option value="Jiangsu">Exchange</Option>
                                  </Select>
                                </Col>
                              </InputGroup>
                              <InputGroup compact style={{ marginBottom: '15px' }}>
                                <Col span="6">
                                  <Col>HEDGE EX</Col>
                                  <Select defaultValue="Hedge-Order">
                                    <Option value="Zhejiang">Bitmex</Option>
                                    <Option value="Jiangsu">Bitfinex</Option>
                                    <Option value="Jiangsu">Cexio</Option>
                                    <Option value="Jiangsu">Flyer</Option>
                                  </Select>
                                </Col>
                                <Col span="6">
                                  <Col>HEDGE TRADING</Col>
                                  <Select defaultValue="Hedge-Order-Type">
                                    <Option value="Zhejiang">Margin</Option>
                                    <Option value="Jiangsu">Exchange</Option>
                                  </Select>
                                </Col>
                                <Col span="6">
                                  REQUIRED SPREAD
                                    <Input defaultValue="" />
                                </Col>
                                <Col span="6">
                                  QUANTITY(BTC)
                                    <Input defaultValue="" />
                                </Col>
                              </InputGroup>
                            </ContentHolder>
                            <Button type="primary" className="isoOrderBtn">
                              Place Order
                              </Button>
                          </Box>
                        </Col>
                      </Row>
                    </LayoutWrapper>
                    <LayoutWrapper>
                      <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col span={24} style={colStyle}>
                          <Box
                            title={<IntlMessages id="uiElements.cards.gridCard" />}
                          >
                            <Row>
                              <ContentHolder style={{ overflow: 'hidden' }}>
                                <Orders />
                              </ContentHolder>
                            </Row>
                          </Box>
                        </Col>
                      </Row>
                    </LayoutWrapper>

                    {/* To dispaly MPS status */}
                    <LayoutContentWrapper>
                      <TableDemoStyle className="isoLayoutContent" >
                        <IntlMessages id="uiElements.cards.mps" />
                        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 45 }}>
                          Updated at:  {<Clock format={'HH:mm:ss'} ticking={true} timezone={'IST'} />} (Local Time)</div>
                        <Tabs className="isoTableDisplayTab">
                          <MpsTable />
                        </Tabs>
                      </TableDemoStyle>
                    </LayoutContentWrapper>

                    {/* To display logs */}
                    <SpreadComOrders />
                    {/* <AppRouter url={url} /> */}
                  </Content>

                  <Footer
                    style={{
                      background: '#ffffff',
                      textAlign: 'center',
                      borderTop: '1px solid #ededed'
                    }}
                  >
                    {siteConfig.footerText}
                  </Footer>
                </Layout>
              </Layout>
            </Layout>
          </AppHolder>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    locale: state.LanguageSwitcher.language.locale,
    selectedTheme: state.ThemeSwitcher.changeThemes.themeName,
    height: state.App.height
  }),
  { logout, toggleAll, TableViews, tableinfos, dataList }
)(App);
