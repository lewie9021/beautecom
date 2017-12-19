import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import HeroBanner from "./HeroBanner";

export default class HomeScreen extends React.Component {

    render() {
        const {navigation} = this.props;

        return (
            <ScrollView style={{flex: 1}}>
                <HeroBanner />
                <Button
                  title="Lister"
                  onPress={() => navigation.navigate("Lister", {name: 'Jane'})}
                />
            </ScrollView>
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
