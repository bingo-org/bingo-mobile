import 'react-native';
import React from 'react';
import App from '..';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  it('should render', () => {
    renderer.create(<App />);
  });
});
