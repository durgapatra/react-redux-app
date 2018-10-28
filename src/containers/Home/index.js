import React from 'react'
import homePM from './homePM'
import ContainerLayout from '../../components/ContainerLayout'
import './App.scss'
import presenter from '../../hoc/Presenter'
import { Row, Col, Icon, Avatar } from "antd"
import UserAdd from './add-user'
import UserList from './user-list'
import userIcon from "../../assets/image/user-icon.png"
import { connect } from 'react-redux'
import * as Action from "../../redux/actions"
const Home = props => {
    return (
        <div className="home">
            <ContainerLayout>
                <Icon type="plus-circle" theme="outlined" onClick={() => props.handleShowModal(true)} />
                <Row gutter={16}>
                    <Col span={6} >
                        <UserList {...props} />
                    </Col>
                    <Col span={12} >
                        {props.selectPeople &&
                            <div>
                                <Row gutter={16}>
                                    <Col span={6} >
                                        <Avatar shape="square" size={100} src={props.selectPeople.img || userIcon} />
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={6} >
                                        Name
                                    </Col>
                                    <Col span={10} >
                                        {props.selectPeople.name}
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={6} >
                                        Id
                                    </Col>
                                    <Col span={10} >
                                        {props.selectPeople.id}
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={6} >
                                        Description
                                    </Col>
                                    <Col span={10} >
                                        {props.selectPeople.Description}
                                    </Col>
                                </Row>
                            </div>}
                    </Col>
                </Row>

                <UserAdd {...props} />

            </ContainerLayout >
        </div >
    )
}

const mapStateToProps = store => {
    return {
        showModal: store.people.showModal,
        selectPeople: store.people.selectPeople,
        people: formartPeopleData(store.people.peopleData)
    }
}
const mapDispatchToProps = dispatch => ({
    handleShowModal: show => dispatch(Action.handleShowModal(show)),
    addNewPeople: data => dispatch(Action.addNewPeople(data)),
    handleSelectPeople: peo => dispatch(Action.selectPeople(peo)),
    handleCheckrdPeople: (value, check) => dispatch(Action.handleCheckrdPeople(value, check)),
    handleDelete: () => dispatch(Action.handleDelete())
})
export default connect(mapStateToProps, mapDispatchToProps)(presenter(homePM, (Home)))
function formartPeopleData(peopleArr) {
    let peopleData = []
    peopleData = peopleArr.map((peo) => {
        !peo.checked && (peo.checked = false)
        return peo
    })
    return peopleData
}