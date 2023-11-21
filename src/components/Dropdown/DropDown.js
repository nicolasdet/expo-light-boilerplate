import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View, Modal } from 'react-native';

const DropDown = ({ DropDowData, closedText = 'modal' }) => {
  const [DropDownOpen, setDropDownOpen] = useState(false);

  const onPressDropDownItem = (callback) => {
    callback();
    setDropDownOpen(!DropDownOpen);
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() => setDropDownOpen(!DropDownOpen)}
    >
      {!DropDownOpen && <Text>{closedText}</Text>}
      {DropDownOpen && (
        <Modal
          presentationStyle="formSheet"
          animationType="slide"
          visible={DropDownOpen}
          style={styles.DropDownOpen}
        >
          {DropDowData.map((item, index) => (
            <Pressable
              style={styles.dropDownElementContainer}
              key={index}
              onPress={() => onPressDropDownItem(item.Action)}
            >
              <Text>{item.label}</Text>
            </Pressable>
          ))}
        </Modal>
      )}
    </Pressable>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    margin: 3,
  },
  DropDownOpen: {
    margin: 20,
    flex: 1,
  },
  dropDownElementContainer: {
    borderColor: 'black',
    marginHorizontal: 5,
    padding: 10,
    borderWidth: 1,
    marginVertical: 15,
  },
});
