import React from 'react';
import Alert from '../../../src/app/components/alert/Alert';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme'; // needed both for snpashot testing but also to prevent errors from enzyme

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

    expect(component.find('div.alert')).hasClass('alert-danger');
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
});
