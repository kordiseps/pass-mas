import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FloatingPlusButton = () => {
    return (
      <View style={styles.buttonStyle}>
        <Button title=''>
          <FontAwesome
            name='plus'
            size={32}
          />
        </Button>
      </View>
    );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#82ff9e',
  }
});

export default FloatingPlusButton;