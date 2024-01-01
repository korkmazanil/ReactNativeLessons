import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View
      style={styles.container}>
      <Text style={styles.textStyle}>Hello, React Native !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumpurple',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 26,
    color: 'white'
  }
});
export default App;