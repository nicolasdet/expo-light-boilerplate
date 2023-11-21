import { createContext, useReducer } from 'react';
import news from '../news.json';
import { SortArrayByDate } from '../utils/date';

export const NewsContext = createContext({
  news: [],
  filterNewsByDate: () => {},
  filterNewsByCategory: () => {},
  addNews: (id, category, date, text, title, image) => {},
});

function NewsReducer(state, action) {
  switch (action.type) {
    case 'ADD_NEWS':
      const newNews = {
        id: action.payload.id,
        category: action.payload.category,
        date: action.payload.date,
        text: action.payload.text,
        title: action.payload.title,
        image: action.payload.image,
      };
      return [...state, newNews];
    case 'FILTER_NEWS_BY_DATE':
      const StateToUpdateByDate = SortArrayByDate([...state], action.payload);
      return StateToUpdateByDate;
    case 'FILTER_NEWS_BY_CATEGORY':
      let StateToUpdateByCategory = [...news.news];
      if (action.payload === 'all') {
        return news.news;
      }
      return StateToUpdateByCategory.filter(
        (item) => item.category === action.payload
      );
    default:
      return state;
  }
}

function NewsContextProvider({ children }) {
  const [NewsState, dispatch] = useReducer(NewsReducer, news.news);

  const filterNewsByDate = (filter = 'desc') => {
    dispatch({ type: 'FILTER_NEWS_BY_DATE', payload: filter });
  };

  const filterNewsByCategory = (filter = 'all') => {
    dispatch({ type: 'FILTER_NEWS_BY_CATEGORY', payload: filter });
  };

  const addNews = (id, category, date, text, title, image) => {
    dispatch({
      type: 'ADD_NEWS',
      payload: {
        id,
        category,
        date,
        text,
        title,
        image,
      },
    });
  };

  const value = {
    news: NewsState,
    filterNewsByDate,
    addNews,
    filterNewsByCategory,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsContextProvider;
