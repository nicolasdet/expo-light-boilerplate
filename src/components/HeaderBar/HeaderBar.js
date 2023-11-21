import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ModalContext } from '../../store/modal-context';
import Button from '../ui/Button';

const HeaderBar = () => {
  const { AddNewsModalVisible, setAddNewsModalVisible } =
    useContext(ModalContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Evenements Culturels à venir</Text>
        </View>
      </View>
      <View>
        <Button
          label="Ajouter un évènement"
          onPress={() => setAddNewsModalVisible(true)}
        />
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    //backgroundColor: '#C8C8C8',
    marginTop: 20,
    width: '60%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
});
