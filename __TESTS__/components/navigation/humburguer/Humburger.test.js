import React from 'react';
import Humburger from '../../../../src/app/components/navigation/humburger/Humburger';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Humburger (navigation) component', () => {
  it('renders as expected', () => {
    const component = renderer.create(<Humburger />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
