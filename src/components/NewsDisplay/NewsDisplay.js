import { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NewsCard from './NewsCard';
import { NewsContext } from '../../store/news-context';
import news from '../../news.json';
import DropDown from '../Dropdown/DropDown';

const NewsDisplay = () => {
  const newsCtx = useContext(NewsContext);
  const Categories = [...new Set(news.news.map((item) => item.category))];

  const dropDownDateFilters = [
    {
      label: 'ordre croissant',
      value: 'asc',
      Action: () => newsCtx.filterNewsByDate('acs'),
    },
    {
      label: 'ordre decroissant',
      value: 'desc',
      Action: () => newsCtx.filterNewsByDate('desc'),
    },
  ];

  let dropDownCategoryFilters = Categories.map((category) => ({
    label: category,
    value: category,
    Action: () => newsCtx.filterNewsByCategory(category),
  }));
  dropDownCategoryFilters.push({
    label: 'Tous',
    value: 'all',
    Action: () => newsCtx.filterNewsByCategory(),
  });

  return (
    <View style={styles.newsContainer}>
      <View style={styles.DropdownContainer}>
        <DropDown
          DropDowData={dropDownDateFilters}
          closedText="Filtrer par dates"
        />
        <DropDown
          DropDowData={dropDownCategoryFilters}
          closedText="Filtrer par categorie"
        />
      </View>
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
  DropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
