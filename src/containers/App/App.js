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
import PlaceOrder from '../Tables/PlaceOrder'
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
                      <PageHeader>
                        <IntlMessages id="forms.input.header" />
                      </PageHeader>
                      <Row style={rowStyle} gutter={gutter} justify="start">
                        <Col span={24} style={colStyle}>
                          <Box>
                            <Row>
                              <PlaceOrder />
                            </Row>
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
                        {/* <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 45 }}>
                          Updated at:  {<Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/India'} />} (Local Time)</div> */}
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
