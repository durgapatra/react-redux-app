import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import * as Action from "../actions"
import "./index.css"
class App extends Component {


    selectCheckBox = (e) => {
        this.props.handleCheckrdPeople(e.target.value, e.target.checked)
        this.forceUpdate()
    }

    render() {
        return (
            <div className="user-list">
                <ListGroup componentClass="ul" style={{ width: "200px" }}>
                    <li className="list-group-item deleteBtn" >
                        <span>  <input type="checkbox" value="selectAll" onChange={this.selectCheckBox} />
                            People</span>
                        <span className="glyphicon glyphicon-trash" onClick={() => this.props.handleDelete()}></span>
                    </li>
                    {this.props.people.map((peo) => {
                        return (
                            <li key={peo.name} className="list-group-item" >
                                <input checked={peo.checked} type="checkbox" value={peo.name} onChange={this.selectCheckBox} />
                                <span onClick={() => this.props.selectPeople(peo)}> {peo.name}</span>
                            </li>
                        )
                    })}
                </ListGroup>
            </div >
        );
    }
}

const mapStateToProps = store => {
    return {
        people: formartPeopleData(store.people.peopleData)
    }
}
const mapDispatchToProps = dispatch => ({
    handleCheckrdPeople: (data, checked) => dispatch(Action.handleCheckrdPeople(data, checked)),
    handleDelete: () => dispatch(Action.handleDelete()),
    selectPeople: peo => dispatch(Action.selectPeople(peo))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

function formartPeopleData(peopleArr) {
    let peopleData = []
    peopleData = peopleArr.map((peo) => {
        !peo.checked && (peo.checked = false)
        return peo
    })
    return peopleData
}