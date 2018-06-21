import * as React from 'react'
import Auth0 from 'react-native-auth0'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native'

const auth0 = new Auth0({ domain: 'xcv58.auth0.com', clientId: 'gfmqD24kN0AbjVL3KCIGtobBvnUXMXT3' });

export default class Landing extends React.Component<{}> {
  state = {
    user: '',
    password: ''
  }

  handleInput = (key: string) => (text: string) => {
    this.setState({ [key]: text })
  }

  login = () => {
    auth0
    .webAuth
    .authorize({scope: 'openid profile email', audience: 'https://xcv58.auth0.com/userinfo'})
    .then(credentials =>
      console.log(credentials)
      // Successfully authenticated
      // Store the accessToken
    )
    .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleInput('user')}
          value={this.state.user}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={this.handleInput('password')}
          value={this.state.password}
        />
        <Button
          onPress={this.login}
          title='Sign in'
          color='#841584'
        ></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    marginLeft: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})
