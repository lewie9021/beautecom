import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native';
import Products from "./products.json";

const ProductList = ({products, handleItemPress}) => {
    const data = products
        .map((product) => ({...product, key: product.id}));

    return (
        <FlatList
          data={data}
          renderItem={({item}) => <ProductListItem onPress={handleItemPress} product={item} />}
        />
    );
}

const ProductListItem = ({product, onPress}) => {
    return (
        <TouchableHighlight onPress={(e) => onPress(product)}>
            <View style={{flex: 1, flexDirection: "row", backgroundColor: "#fff"}}>
                <Image style={{width: 96, height: 96}} source={{uri: product.imageUrl}} />
                <View>
                    <Text style={{fontWeight: "bold", padding: 8, paddingBottom: 0}}>{product.name}</Text>
                    <Text style={{padding: 8}}>{product.price}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default class ListerScreen extends React.Component {

    static navigationOptions = {
        title: 'Lister Screen'
    };

    handleProductListItemPress = (product) => {
        const {navigation} = this.props;

        navigation.navigate("Product", {product});
    };


    render() {
        const {navigation} = this.props;

        return (
            <View>
                <ProductList
                    handleItemPress={this.handleProductListItemPress}
                    products={Products}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
