import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Animations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Animations</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  }
});

export default Animations;