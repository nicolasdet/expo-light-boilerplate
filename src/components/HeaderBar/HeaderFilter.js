import { useState, useContext } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NewsContext } from '../../store/news-context';

const HeaderFilter = () => {
  const newsCtx = useContext(NewsContext);
  const [DropDownOpen, setDropDownOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => newsCtx.filterNewsByDate('2022-06-07')}>
        <Text>Filtrer :</Text>
      </Pressable>
      {/* {DropDownOpen && (
        <View style={styles.DropDownOpen}>
          <Pressable onPress={filterEventsByDate()}>
            <Text>date</Text>
          </Pressable> 
        </View>
      )} */}
    </View>
  );
};

export default HeaderFilter;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    marginRight: 20,
  },
  DropDownOpen: {
    backgroundColor: 'white',
  },
});
