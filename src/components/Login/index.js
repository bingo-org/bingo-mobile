import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Login = () => (
  <SafeAreaView>
    <Container>
      <Icon name="dog" size={48} />
      <Title>Bingo</Title>
    </Container>
  </SafeAreaView>
);

export default Login;
