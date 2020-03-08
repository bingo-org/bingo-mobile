import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';

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
  margin-bottom: 60px;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);

    GoogleSignin.configure();
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  async loginWithGoogle() {
    const navigation = this.props.navigation;
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      const {data} = await api.sessions.create({
        credential: {provider: 'google', token: accessToken},
      });
      await GoogleSignin.signOut();
      navigation.replace('Home');
    } catch (error) {
      if (
        error.code === statusCodes.SIGN_IN_CANCELLED ||
        error.code === statusCodes.IN_PROGRESS
      )
        return;
      Alert.alert('Hubo un error', 'Por favor reintentalo mas tarde');
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Container>
          <Icon name="dog" size={48} />
          <Title>Bingo</Title>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.loginWithGoogle}
          />
        </Container>
      </SafeAreaView>
    );
  }
}

export default Login;
