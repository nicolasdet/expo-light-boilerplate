import { useState, useContext } from 'react';
import { ModalContext } from '../../store/modal-context';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

const AddNewsForm = () => {
  const { AddNewsModalVisible, setAddNewsModalVisible } =
    useContext(ModalContext);

  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="slide"
      visible={AddNewsModalVisible}
      style={styles.container}
      onRequestClose={() => setModalVisible(false)}
      transparent
    >
      <Pressable
        onPressOut={() => setAddNewsModalVisible(false)}
        style={styles.outerModal}
      >
        <Pressable style={styles.innerModal}>
          <Text>Ajouter un Evenements</Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AddNewsForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModal: {
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
    borderBlockColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});
