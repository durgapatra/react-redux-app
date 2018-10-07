import React from 'react';
import { Button, Modal, ControlLabel, Image, Row, Col, Grid } from "react-bootstrap"
import userIcon from "../image/user-icon.png"
import { connect } from 'react-redux'
import * as Action from "../actions"
class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.name = React.createRef()
        this.id = React.createRef()
        this.description = React.createRef()

    }
    handleAddNewUser = () => {

        let data = {
            name: this.name.current.value,
            id: this.id.current.value,
            Description: this.description.current.value
        }
        if (data.name && data.id && data.Description) {
            this.props.addNewPeople(data)
            this.props.handleShowModal(false)
        } else {
            alert("Please Fill Up all the fields")
        }
    }
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={() => this.props.handleShowModal(false)}>

                    <Grid style={{ margin: "15px auto 0 auto" }}>
                        <Row>
                            <Col xs={2} md={2}>
                                <Image style={{ border: "1px solid black" }} src={userIcon} circle />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2}>
                                <ControlLabel>Name</ControlLabel>
                            </Col>
                            <Col xs={2} md={2}>
                                <input type="text" className="form-control"
                                    placeholder="Enter Name"
                                    ref={this.name}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2}>
                                <ControlLabel>Id</ControlLabel>
                            </Col>
                            <Col xs={2} md={2}>
                                <input type="text" className="form-control"
                                    placeholder="Enter text"
                                    ref={this.id}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2}>
                                <ControlLabel>Description</ControlLabel>
                            </Col>
                            <Col xs={2} md={2}>
                                <textarea type="textarea" className="form-control" ref={this.description} />
                            </Col>
                        </Row>
                    </Grid>

                    <Modal.Footer>
                        <Button onClick={() => this.props.handleShowModal(false)}>Close</Button>
                        <Button className="btn btn-primary active" onClick={this.handleAddNewUser}>Add User</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = store => {
    return {
        showModal: store.people.showModal
    }
}
const mapDispatchToProps = dispatch => ({
    handleShowModal: show => dispatch(Action.handleShowModal(show)),
    addNewPeople: data => dispatch(Action.addNewPeople(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
