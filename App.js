import React, {useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('anil');
  const [person, setPerson] = useState({name: 'anil', age: 22});

  const clickHandler = () =>{
    setName('ANIL');
    setPerson({name: 'ANIL', age: 32});

  }

  return (
    <View
      style={styles.container}>
      <Text style={styles.textStyle}>My name is {name}</Text>
      <Text style={styles.textStyle}>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}/>
      </View>
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
  },
  buttonContainer:{
    marginTop: 20
  }
});
export default App;