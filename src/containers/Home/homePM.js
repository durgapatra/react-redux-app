import React from "react"
class HomePM {
    constructor(props) {
        this.props = props
        this.state = {

        }
        this.name = React.createRef()
        this.id = React.createRef()
        this.description = React.createRef()
    }

    selectCheckBox = (e) => {
        this.props.handleCheckrdPeople(e.target.value, e.target.checked)
    }
    handleAddNewUser = () => {
        console.log(this.props)
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

}
export default HomePM
