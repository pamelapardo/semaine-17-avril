// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { useState } from 'react';
// import * as FileSystem from 'expo-file-system'

// export default function SaveTest() {
//   const [textAdded, setTextAdded] = useState('')

//   const changetextHandler = (thisText) => {
//     setTextAdded(thisText)
//   }

//   const changeAddedHandler = async () => {
//     try {
//       await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
//       if (fileInfo.exists) {
//         // const fileContent = await readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
//         const fileInfo = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', textAdded)
//         console.log(fileInfo)
//       } else {
//         // await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
//         console.lig('doesnt exist')
//       }
//     } catch (error) {
//       console.log('erreur non catche writefile util.js: ', error)
//     }
//   }


//   return (
//     <View style={styles.saveContainer}>
//       <Text>Write down here</Text>
//       <TextInput onChangeText={changetextHandler} placeholder='This is your text' />
//       <Button onPress={changeAddedHandler} title='Save' />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   saveContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });
