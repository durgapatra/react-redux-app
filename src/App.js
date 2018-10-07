import React, { Component } from 'react';
import UserAdd from './components/add-user'
import UserList from './components/user-list'
import { Grid, Row, Col, ControlLabel, Image } from "react-bootstrap"
import "./App.css"
import userIcon from "./image/user-icon.png"

import { connect } from 'react-redux'
import * as Action from "./actions"
class App extends Component {
  render() {
    return (
      <Grid >
        <Row className="show-grid">
          <Col className="addBtn">
            <span style={{ fontSize: "25px" }} onClick={() => this.props.handleShowModal(true)} className="glyphicon glyphicon-plus-sign"></span>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={2} md={3}>
            <UserList />
          </Col>
          <Col xs={2} md={2}>
            <UserAdd />
            {this.props.selectPeople &&
              <Grid style={{ marginTop: "15px" }}>
                <Row>
                  <Col xs={2} md={2} style={{ marginLeft: "-56px" }}>
                    <Image style={{ border: "1px solid black", width: "100px", marginBottom: '15px' }} src={this.props.selectPeople.img || userIcon} circle />
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} md={2}>
                    <ControlLabel>Name</ControlLabel>
                  </Col>
                  <Col xs={2} md={2}>
                    <div className="div-input" style={{ overflowY: "hidden", height: "37px" }}>
                      {this.props.selectPeople.name}
                    </div>
                  </Col>

                </Row>
                <Row>
                  <Col xs={2} md={2}>
                    <ControlLabel>Id</ControlLabel>
                  </Col>
                  <Col xs={2} md={2}>
                    <div className="div-input" style={{ overflowY: "hidden", height: "37px" }}>
                      {this.props.selectPeople.id}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2} md={2}>
                    <ControlLabel>Description</ControlLabel>
                  </Col>
                  <Col xs={8} md={3}>
                    <div className="div-input">
                      {this.props.selectPeople.Description}
                    </div>
                  </Col>
                </Row>
              </Grid>}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = store => {
  return {
    showModal: store.people.showModal,
    selectPeople: store.people.selectPeople
  }
}
const mapDispatchToProps = dispatch => ({
  handleShowModal: show => dispatch(Action.handleShowModal(show))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

