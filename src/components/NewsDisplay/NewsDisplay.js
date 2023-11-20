import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import news from '../../news.json';
import NewsCard from './NewsCard';
import { NewsContext } from '../../store/news-context';

const NewsDisplay = () => {
  const newsCtx = useContext(NewsContext);
  return (
    <View style={styles.newsContainer}>
      <FlatList
        data={newsCtx.news}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <NewsCard
            category={item.category}
            date={item.date}
            text={item.text}
            title={item.title}
            images={item.images}
          />
        )}
      />
    </View>
  );
};

export default NewsDisplay;

const styles = StyleSheet.create({
  newsContainer: {
    flex: 4,
    paddingTop: 50,
    alignItems: 'center',
  },
});
