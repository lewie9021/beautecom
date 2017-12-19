import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
   return (
      <View style={styles.container}>
         <TouchableOpacity style={{width: "100%"}} onPress={props.onPress}>
            <Text style={styles.button}>
               {props.children}
            </Text>
         </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center',
   },
   button: {
      width: "100%",
      padding: 25,
      backgroundColor: 'white',
      textAlign: "center"
   }
});

export default Button;
