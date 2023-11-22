import { View, TextInput, StyleSheet, Text } from 'react-native';

export const Input = ({
  label,
  textInputConfig,
  style,
  labelStyle,
  validation,
}) => {
  const extraStyles = [style];

  if (textInputConfig.multiline) {
    extraStyles.push({ height: 100 });
  }
  return (
    <View style={styles.InputContainerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={[
          styles.InputStyle,
          extraStyles,
          validation ? { borderColor: 'red' } : { borderColor: 'black' },
        ]}
        {...textInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainerStyle: {
    width: 400,
    marginVertical: 5,
  },
  InputStyle: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
});
