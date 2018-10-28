import React from 'react';
import { List, Icon } from 'antd'
const App = props => {
    return (
        <div className="user-list">
            <List
                bordered
                header={
                    <div >
                        <span>  <input type="checkbox" value="selectAll" onChange={props.pm.selectCheckBox} />
                            People</span>

                        <Icon onClick={() => props.handleDelete()} type="delete" theme="outlined" />
                    </div>
                }

                dataSource={props.people}
                renderItem={item => (
                    <List.Item key={item.name}>
                        <List.Item.Meta
                            description={<input checked={item.checked} type="checkbox" value={item.name} onChange={props.pm.selectCheckBox} />}
                        />
                        <div onClick={() => props.handleSelectPeople(item)}> {item.name}</div>
                    </List.Item>
                )}
            />

        </div >
    );
}


export default App

