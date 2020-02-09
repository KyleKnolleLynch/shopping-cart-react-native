import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Item = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listView}>
        <Text style={styles.listText}>{item.text}</Text>
        <Icon
          name="delete-forever"
          size={20}
          color="tomato"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    backgroundColor: '#d7d7d7',
    borderBottomWidth: 2,
    borderBottomColor: '#e5e5e5',
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listText: {
    fontSize: 16,
  },
});

export default Item;
