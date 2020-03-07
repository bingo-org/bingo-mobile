import React from 'react';
import styled from 'styled-components/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    GoogleSignin.configure();
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  async loginWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const {accessToken} = await GoogleSignin.getTokens();
      await GoogleSignin.signOut();
      console.log(accessToken);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
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
