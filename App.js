import { StyleSheet, View } from 'react-native';
import { useState } from "react";
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import ProductsList from './src/components/ProductsList';

export default function App() {
  const [newTitle, setNewTitle] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handlerAddProduct = () => {
    const generarId = () => {
      return Math.random().toString(30).substring(2)
    }
    const newProduct = {
      id: generarId(),
      title: newTitle,
      price: newPrice
    }

    setProducts(current => [...current, newProduct])
    setNewTitle("")
    setNewPrice("")
  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }
  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <AddProduct valueTitle={newTitle} valuePrice={newPrice} onChangeTitle={setNewTitle} onChangePrice={setNewPrice} addProduct={handlerAddProduct} />
      <ProductsList products={products} onModal={handlerModal} />
      <ModalDelete visible={modalVisible} product={productSelected} onModal={setModalVisible} onDelete={handlerDeleteProduct} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 50,
    backgroundColor: "#14213d"
  },
})