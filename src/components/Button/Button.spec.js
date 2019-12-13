import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { getViewBaseStyle } from './helpers';

describe('rendering', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button text="Submit" />);
  });

  it('should render a <TouchableWithoutFeedback />', () => {
    expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
  });

  it('should render a label', () => {
    expect(wrapper.find('Text').contains('Submit')).toBe(true);
  });

  describe('no type', () => {
    const viewStyle = getViewBaseStyle('default');
    it('should have the default style', () => {
      expect(wrapper.find('View').prop('style')).toEqual([viewStyle]);
    });
  });
});

describe('interaction', () => {
  let wrapper;
  const fn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Button text="Submit" onClick={fn} />);
  });

  it('should call onClick callback', () => {
    wrapper.simulate('press');

    expect(fn).toBeCalledTimes(1);
  });
});
