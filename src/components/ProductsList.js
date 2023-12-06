import { View, FlatList, StyleSheet } from "react-native"
import CardProduct from "./CardProduct"

const ProductsList = ({ products, onModal }) => {
  return (
    <View style={styles.container}>
      <FlatList data={products} keyExtractor={item => item.id} renderItem={({ item }) => <CardProduct item={item} onModal={onModal} />} />
    </View>
  )
}

export default ProductsList

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
})