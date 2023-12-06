import { Modal, StyleSheet, View, Text, Button } from 'react-native'
const ModalDelete = ({ visible, product, onDelete, onModal }) => {

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>¿Confirmar borrado de {product.title}?</Text>
          <Button title="Confirmar" onPress={onDelete}></Button>
          <Button title="Volver atrás" onPress={() => onModal(false)}></Button>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14213d"
  },
  content: {
    width: "80%",
    borderWidth: 2,
    padding: 10,
    gap: 10,
    borderColor: "#fca311",
  },
  text: {
    textAlign: "center",
    color: "#fff",
  }
})

export default ModalDelete