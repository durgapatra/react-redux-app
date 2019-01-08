import React from "react";
import "./header.scss";
import { Layout, Switch } from "antd";
const { Header } = Layout;
export default class MyHeader extends React.Component {
  state = {
    theme: "dark"
  }
  onThemeChange = (value) => {
    if (value) {
      this.setState({ theme: "light" })
    } else {
      this.setState({ theme: "dark" })
    }
  }
  render() {
    console.log(this.props);
    return (
      <Header className={"my-header" + " " + this.state.theme}>
        <div>
          <Switch onChange={this.onThemeChange} />
          <span
            style={{ marginLeft: "5px" }}
            onClick={() => {
              localStorage.removeItem("token");
              this.props.history.push("login");
            }}
          >
            Sign Out
          </span>
        </div>
      </Header>
    );
  }
}
