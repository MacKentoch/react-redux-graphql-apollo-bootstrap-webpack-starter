import React from 'react';
import Alert from '../../../src/app/components/alert/Alert';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

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
});
