import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { DocumentDirectoryPath, writeFile } from 'react-native-fs';

export default function SaveTest() {
  const [textAdded, setTextAdded] = useState('')

  const changetextHandler = (thisText) =>{
    setTextAdded (thisText)
  }
  
  const changeAddedHandler = async () => {
    console.log(textAdded)
  }

  return (
    <View style={styles.saveContainer}>
      <Text>Write down here</Text>
      <TextInput onChangeText={changetextHandler} placeholder='This is your text'/>
      <Button onPress={changeAddedHandler} title='Save'/>
    </View>
  );
}

const styles = StyleSheet.create({
  saveContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
