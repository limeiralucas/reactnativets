import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const wrapper = shallow(<Button />);
it('should render a <TouchableWithoutFeedback />', () => {
  expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
});
