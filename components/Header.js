import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/images/icon.jpg')}
        style={styles.headerImg}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping Cart'
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: 10,
    backgroundColor: 'skyblue',
  },
  headerImg: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 40,
  },
  headerText: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;
