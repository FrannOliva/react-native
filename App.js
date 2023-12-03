import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ModalDelete from './src/components/ModalDelete';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputbutton}>
        <TextInput style={styles.input} placeholder='Buscar' />
        <Button title='+' />
      </View>
      <ModalDelete />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbutton: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 2,
    padding: 10,
    marginBottom: 5,
    width: 200,
  },
})
