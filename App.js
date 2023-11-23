import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputbutton}>
        <TextInput style={styles.input} placeholder='Buscar' />
        <Button title='+' />
      </View>
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
