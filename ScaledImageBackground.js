import React from 'react';
import { ImageBackground, Image, Dimensions } from 'react-native';

const calculateImageSize = (imageUri) => {
    return new Promise((resolve) => {
        Image.getSize(imageUri, (width, height) => {
            const screenWidth =  Dimensions.get('window').width;

            resolve({
                width: screenWidth,
                height: height * (screenWidth / width)
            });
        });
    });
}

class ScaledImageBackground extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: Dimensions.get('window').width,
            height: 0
        };
    }

    handleDimensionsChange = () => {
        calculateImageSize(this.props.uri)
            .then(({width, height}) => this.setState({width, height}));
    }

    componentWillMount() {
        Dimensions.addEventListener("change", this.handleDimensionsChange);

        calculateImageSize(this.props.uri)
            .then(({width, height}) => this.setState({width, height}));
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.handleDimensionsChange);
    }

    render() {
        return (
            <ImageBackground source={{uri: this.props.uri}} style={{height: this.state.height, width: this.state.width}}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default ScaledImageBackground;
