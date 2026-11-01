import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View> 
        <TextInput placeholder='your course goal' />
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
});
