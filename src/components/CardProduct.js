import { StyleSheet, Text, View, Button } from 'react-native'

const CardProduct = ({ item, onModal }) => {
  return (
    <View style={styles.productContainer}>
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Button title="-" onPress={() => onModal(item)} />
    </View>
  )
}

export default CardProduct

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 4
  }
})