import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} placeholder='your course goal' />
        <Button title="Add goal" />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}
// Styles Objects
const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
