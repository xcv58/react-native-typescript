import * as React from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const menusQuery = gql`
  {
    menus {
      name
      shortName
    }
  }
`

const Menu = (props: any) => {
  const { item } = props
  return (
    <View style={{
      flex: 1,
      height: 50,
      padding: 10,
      justifyContent: 'center'
    }}>
      <Text key={item.shortName}>{item.name}</Text>
    </View>
  )
}

export default class Menus extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Query query={menusQuery}>
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <ActivityIndicator size="large" />
            }
            if (error) {
              return <Text>{error.message}</Text>
            }
            return (
              <FlatList
                refreshing={loading}
                onRefresh={refetch}
                data={data.menus}
                keyExtractor={(x: { shortName: string }) => x.shortName}
                renderItem={Menu}
              />
            )
          }}
        </Query>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
})
