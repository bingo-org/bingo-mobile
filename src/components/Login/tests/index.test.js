import 'react-native';
import React from 'react';
import Login from '..';
import renderer from 'react-test-renderer';

describe('<Login />', () => {
  it('should render', () => {
    renderer.create(<Login />);
  });
});
