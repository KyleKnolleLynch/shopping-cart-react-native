import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({footerTitle}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>&copy;{footerTitle}</Text>
    </View>
  );
};

Footer.defaultProps = {
  footerTitle: ' Kyle Lynch 2020'
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 36,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
})

export default Footer;