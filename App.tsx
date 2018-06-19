import * as React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Menus from './components/Menus'

const client = new ApolloClient({
  uri: 'https://us1.prisma.sh/yihong-ed6b25/demo-server/dev'
})

export default class App extends React.Component<{}> {
  render() {
    return <ApolloProvider client={client}>
        <Menus />
      </ApolloProvider>;
  }
}
