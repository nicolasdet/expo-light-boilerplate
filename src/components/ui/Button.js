import { View, Text, Pressable, StyleSheet } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <Pressable
      style={styles.container}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
