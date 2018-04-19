// @flow

import React from 'react';
import Alert from '../../../src/front/components/alert/Alert';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { mount } from 'enzyme';

describe('Alert component', () => {
  it('renders as expected', () => {
    const props = { showAlert: true, type: 'warning' };

    const component = renderer
      .create(
        <Alert {...props}>
          <p>an alert</p>
        </Alert>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders as an error alert', () => {
    const props = {
      showAlert: true,
      type: 'error',
      errorTitle: 'error title',
      errorMessage: 'error message',
    };

    const component = mount(
      <Alert {...props}>
        <p>an alert</p>
      </Alert>,
    );

    expect(component.find('div.alert')).toBeDefined();
    expect(component.find('div.alert').hasClass('alert-danger'));
  });

  it('should call onClose on a close button click', () => {
    const onClickMock = jest.fn();
    const preventDefault = jest.fn();

    const mockClickEvent = { preventDefault };

    const component = mount(
      <Alert showAlert={true} type="warning" onClose={onClickMock} />,
    );

    const button = component.find('button.close');
    button.simulate('click', mockClickEvent);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should be scaled to zero', () => {
    const props = {
      showAlert: false,
    };

    const component = mount(<Alert {...props} />);
    const divAlert = component.find('div.alert');
    expect(divAlert).toBeDefined();
    expect(divAlert.prop('style')).toHaveProperty('transform', 'scale(0)');
  });
});
