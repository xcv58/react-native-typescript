import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import {
  Platform,
  StatusBar,
  SafeAreaView
} from 'react-native'
import Menus from './components/Menus'
import Landing from './components/Landing'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/yihong-ed6b25/demo-server/dev'
})

export default class App extends React.Component<{}> {
  render() {
    const paddingTop = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    return (
      <ApolloProvider client={client}>
        <SafeAreaView style={{ paddingTop, flex: 1 }}>
          {/* <Menus /> */}
          <Landing />
        </SafeAreaView>
      </ApolloProvider>
    )
  }
}
