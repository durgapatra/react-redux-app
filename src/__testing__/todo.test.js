import React from 'react';
import { shallow } from 'enzyme';
import Todo from "../containers/Home";

it('TodoList Component renders correctly', () => {
    const wrapper = shallow(<Todo />)
    console.log(wrapper.debug())
})