import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/icon.jpg')}
          style={styles.img}
        />
        <Text style={styles.title}>Shopping Cart</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
      <View style={styles.footer}>
        <Text>&copy; Kyle Lynch 2020</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  title: {
    color: 'tomato',
    fontSize: 30,
    fontFamily: 'fantasy',
    fontWeight: 'bold',
    padding: 14,
  },
  list: {
    flex: 8,
    width: '100%',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
