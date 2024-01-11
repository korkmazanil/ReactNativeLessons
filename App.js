import React, {useState } from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const [witchesAndWizards, setWitchesAndWizards] = useState([
    {name: 'Harry Potter', key: 1},
    {name: 'Hermione Granger', key: 2},
    {name: 'Ron Weasley', key: 3},
    {name: 'Rubeus Hagrid', key: 4},
    {name: 'Albus Dumbledore', key: 5},
    {name: 'Free Elf Dobby', key: 6},
    {name: 'Sirius Black', key: 7},
    {name: 'Neville Weasley', key: 8},
    {name: 'Fred Weasley', key: 9},
    {name: 'Remus Lupin', key: 10},
    {name: 'Ginny Weasley', key: 11},
  ]);
  
  return (
    <View style={styles.container}>

      <FlatList 
       data={witchesAndWizards}
       renderItem={({item}) => (
        <Text style={styles.item}>{item.name}</Text>
       )}
      />

      {/* <ScrollView>
       { witchesAndWizards.map((item) => {
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
  },
  item: {
    margin: 12,
    padding: 30,
    backgroundColor: 'lightcoral',
    fontSize: 24,
    borderRadius: 10,
    color: 'white',
    borderRadius: 10
  }

});
export default App;