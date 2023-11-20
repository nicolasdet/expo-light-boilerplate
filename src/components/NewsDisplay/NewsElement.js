import { StyleSheet, Text, View } from 'react-native';

const NewsElement = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
    </View>
  );
};

export default NewsElement;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 2,
  },
});
