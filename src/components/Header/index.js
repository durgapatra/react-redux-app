import React from "react";
import "./header.scss";
import { Layout } from "antd";
const { Header } = Layout;
export default class MyHeader extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Header className="my-header">
        <div>
          <span
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
