import React from 'react';
import LeftNavButton from '../../../../../src/app/components/navigation/leftNav/leftNavButton/LeftNavButton';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';

describe('LeftNavButton (navigation) component', () => {
  it('renders as expected', () => {
    const props = {
      onClick: () => {},
      link: 'link',
      label: 'label',
      viewName: '/',
    };
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <LeftNavButton {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should call onClick on a click', () => {
    const onClickMock = jest.fn();
    const props = {
      onClick: onClickMock,
      link: 'link',
      label: 'label',
      viewName: '/',
    };

    const component = mount(
      <div>
        <MemoryRouter>
          <LeftNavButton {...props} />
        </MemoryRouter>
      </div>,
    );

    const button = component.find('a');
    button.simulate('click');

    expect(onClickMock).toHaveBeenCalled();
  });
});
