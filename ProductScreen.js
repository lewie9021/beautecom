import React from 'react';
import { StyleSheet, Text, View, Image, Button, Dimensions, WebView } from 'react-native';

class ScaledImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {source: {uri: this.props.uri}};
    }

    componentWillMount() {
        Image.getSize(this.props.uri, (width, height) => {
            if (this.props.width && !this.props.height) {
                this.setState({width: this.props.width, height: height * (this.props.width / width)});
            } else if (!this.props.width && this.props.height) {
                this.setState({width: width * (this.props.height / height), height: this.props.height});
            } else {
                this.setState({width: width, height: height});
            }
        });
    }

    render() {
        return (
            <Image source={this.state.source} style={{height: this.state.height, width: this.state.width}}/>
        );
    }
}

class ProductScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.product.name,
        headerTitleStyle: {textAlign: 'center', alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        }
    });

    render() {
        const {navigation} = this.props;
        const product = navigation.state.params.product;

        return (
            <View style={styles.container}>
                <ScaledImage width={Dimensions.get('window').width} uri={product.imageUrl} />
                <WebView
                    source={{html: product.description.replace("\r", "").replace("\n", "")}}
                    style={{}}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
});

export default ProductScreen;
