import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = val => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Item..."
        onChangeText={onChange}
        clearButtonMode='always'
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="add" size={18} /> Add Item...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    padding: 10,
    fontSize: 16,
  },
  btn: {
    margin: 8,
    padding: 8,
    backgroundColor: 'goldenrod',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
