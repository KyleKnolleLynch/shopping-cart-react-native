import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import Item from './components/Item';
import AddItem from './components/AddItem';
import Footer from './components/Footer';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error!', 'Please Add Item', [{text: 'OK'}]);
    } else {
      setItems(prevState => {
        return [{id: uuid(), text}, ...prevState];
      });
    }
  };

  const deleteItem = id => {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title={'Shopping Cart'} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <Item item={item} deleteItem={deleteItem} />}
        keyExtractor={item => item.id}
      />
      <Footer footerTitle={' Kyle Lynch 2020'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default App;
