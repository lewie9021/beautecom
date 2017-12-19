import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import ScaledImageBackground from "./ScaledImageBackground";
import Button from "./Button";

const imageUrl = "https://images.contentful.com/eoaaqxyywn6o/5J0rE24dC8iCecm6c8miUC/d0235accab7283dc9a3d851fe1843727/02-181217-heromobile.jpg?fm=jpg&fl=progressive&w=1200";
const logoUrl = "https://images.contentful.com/eoaaqxyywn6o/6NsTZhpUTCceMuwqAcCw4i/755ac2e80d9f9fce52a5e5ddce65c9b1/jeffree-star-logo.png";
const captionText = "The holographic holiday collection is back and the squad just got bigger!";
const callToActionText = "Don't miss it".toUpperCase();

class HeroBanner extends React.Component {
  render() {
     return (
      <View style={styles.container}>
        <ScaledImageBackground width={Dimensions.get('window').width} uri={imageUrl}>
            <View style={styles.innerImageContainer}>
                <View style={styles.innerImageTop}>
                    <Image resize={"cover"} style={styles.innerImageTopLogo} source={{uri: logoUrl}} />
                </View>

                <View style={styles.innerImageMiddle}>
                    <Text style={styles.innerImageMiddleText}>
                        {captionText}
                    </Text>
                </View>

                <View style={styles.innerImageBottom}>
                    <Button onPress={() => alert("Clicked Call To Action!")}>
                        {callToActionText}
                    </Button>
                </View>
            </View>
        </ScaledImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerImageContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: "column",
      justifyContent: "center",
      padding: "15%"
  },
  innerImageTop: {
      flex: 1,
      width: "75%",
      // backgroundColor: "red"
  },
  innerImageMiddle: {
      flex: 1,
      width: "125%",
      // backgroundColor: "green",
      justifyContent: "center",
  },
  innerImageBottom: {
      flex: 1,
      width: "75%",
      maxWidth: 192,
      alignItems: 'center',
      // backgroundColor: "orange",
  },
  innerImageTopLogo: {
      width: "100%",
      height: "100%"
  },
  innerImageMiddleText: {
      textAlign: "center",
      color: "white",
      fontSize: 20
  }
});

export default HeroBanner;
