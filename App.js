import React, {useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('anil');
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. Walter White'
        onChangeText={(val) => setName(val)}/>

      <Text>Enter Age: </Text>
      <TextInput 
        maxLength={3}
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 99'
        onChangeText={(val) => setAge(val)}/>


      <Text>name: {name}, age: {age}</Text>
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
  input:{
    borderWidth: 2,
    borderColor: '#999',
    padding: 6,
    margin: 8,
    width: 200

  }
});
export default App;