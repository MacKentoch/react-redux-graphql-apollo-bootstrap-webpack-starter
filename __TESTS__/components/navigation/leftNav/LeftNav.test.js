import React from 'react';
import LeftNav from '../../../../src/app/components/navigation/leftNav/LeftNav';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

describe('LeftNav (navigation) component', () => {
  it('renders as expected', () => {
    const props = {
      onLeftNavButtonClick: () => {},
      leftLinks: [
        {
          link: 'link',
          label: 'label',
          viewName: '/',
        },
      ],
    };
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <LeftNav {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
