import React from 'react';
import { Form, Modal, Input, Avatar } from "antd"
import userIcon from "../../assets/image/user-icon.png"
const FormItem = Form.Item;
const AddUser = props => {
    return (
        <div>
            <Modal title="Add New User"
                onOk={props.pm.handleAddNewUser}
                okText="Add User"
                visible={props.showModal} onCancel={() => props.handleShowModal(false)}>
                <Form>
                    <FormItem >
                        <Avatar size={64} alt="" src={userIcon} />
                    </FormItem>
                    <FormItem label="Name">
                        <Input type="text" className="form-control"
                            placeholder="Enter Name"
                            ref={props.pm.name}
                        />
                    </FormItem>
                    <FormItem label="Id">
                        <Input type="text" className="form-control"
                            placeholder="Enter text"
                            ref={props.pm.id}
                        />
                    </FormItem >
                    <FormItem label="Description">
                        <Input.TextArea rows={4} ref={props.pm.description} />
                    </FormItem>
                </Form>
            </Modal>
        </div>
    );
}

export default AddUser
