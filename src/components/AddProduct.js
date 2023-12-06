import { StyleSheet, TextInput, Button, View } from 'react-native'

const AddProduct = ({ valueTitle, valuePrice, onChangeTitle, onChangePrice, addProduct }) => {
  return (
    <View style={styles.inputButton}>
      <TextInput style={styles.input} placeholder='Producto' placeholderTextColor="#fca311" value={valueTitle} onChangeText={(t) => onChangeTitle(t)} />
      <TextInput style={styles.input} placeholder='Precio' placeholderTextColor="#fca311" value={valuePrice} onChangeText={(t) => onChangePrice(t)} />
      <Button style={styles.button} title='+' onPress={addProduct} />
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
  inputButton: {
    flexDirection: 'row',
    gap: 10
  },
  input: {
    borderWidth: 2,
    padding: 10,
    marginBottom: 5,
    width: 130,
    borderColor: "#fca311",
    color: "#fff",
  },
  button: {

  }
})