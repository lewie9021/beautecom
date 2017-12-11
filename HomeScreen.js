import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {

    render() {
        const {navigation} = this.props;

        return (
            <Button
              title="Lister"
              onPress={() => navigation.navigate("Lister", {name: 'Jane'})}
            />
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
