import { Modal, StyleSheet, View } from 'react-native'
const ModalDelete = ({ onDelete, modalVisible }) => {

  return (
    <Modal visible={modalVisible}>
      <View>
        <View>
          <Text>¿Confirmar borrado?</Text>
          <Button title="Confirmar" onPress={handlerDeleteProduct}></Button>
          <Button title="Volver atrás" onPress={() => { setModalVisible(false) }}></Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  }
})
export default ModalDelete