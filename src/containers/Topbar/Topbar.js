import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarNotification from "./topbarNotification";
import TopbarMessage from "./topbarMessage";
import TopbarSearch from "./topbarSearch";
import TopbarUser from "./topbarUser";
import TopbarAddtoCart from "./topbarAddtoCart";
import TopbarWrapper from "./topbar.style";
import Button from "../../components/uielements/button";
import Clock from 'react-live-clock';

const { Header } = Layout;
const { toggleCollapsed } = appActions;

class Topbar extends Component {
  render() {
    const { toggleCollapsed, url, customizedTheme, locale } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: "fixed",
      width: "100%",
      height: 70
    };
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
            <Button type="default" className="isoOrderBtn">
              Restart Application
            </Button>
            <Button type="default" className="isoOrderBtn">
              Restart Excel API
            </Button>
          </div>

          <ul className="isoRight">
            {/* <li className="isoSearch">
              <TopbarSearch locale={locale} />
            </li>

            // <li
            //   onClick={() => this.setState({ selectedItem: "notification" })}
            //   className="isoNotify"
            // >
            //   <TopbarNotification locale={locale} />
            // </li>

            <li
              onClick={() => this.setState({ selectedItem: "message" })}
              className="isoMsg"
            >
              <TopbarMessage locale={locale} />
            </li>
            <li
              onClick={() => this.setState({ selectedItem: "addToCart" })}
              className="isoCart"
            >
              <TopbarAddtoCart url={url} locale={locale} />
            </li> */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: 20, paddingTop: 20, paddingRight: 45 }}>
              <Button type="primary" className="isoOrderBtn">
                <b>Current Time (UTC):  {<Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} />}</b>
              </Button>
            </div>

            <li
              onClick={() => this.setState({ selectedItem: "notification" })}
              className="isoNotify"
            >
              <TopbarNotification locale={locale} />
            </li>

            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser locale={locale} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App,
    locale: state.LanguageSwitcher.language.locale,
    customizedTheme: state.ThemeSwitcher.topbarTheme
  }),
  { toggleCollapsed }
)(Topbar);
