import { StyleSheet, Text, View, Image } from 'react-native';
import NewsElement from './NewsElement';

const NewsCard = ({ category, date, text, title, images }) => {
  console.log(images);
  return (
    <View style={styles.container}>
      <View style={styles.ElementsContainer}>
        <NewsElement label={title} />
        <NewsElement label={date} />
        <NewsElement label={text} />
      </View>
      <View style={styles.imageContainer}>
        {images && (
          <Image
            source={require('../../../public/images/cannes1.jpg')}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
  },
  ElementsContainer: {
    width: '70%',
    flexDirection: 'column',
  },
  imageContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});
