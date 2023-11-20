import { createContext, useReducer } from 'react';
import news from '../news.json';

export const NewsContext = createContext({
  news: [],
  filterNewsByDate: () => {},
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
      const filteredNews = state.filter((item) => item.date === action.payload);
      return filteredNews;

    default:
      return state;
  }
}

function NewsContextProvider({ children }) {
  const [NewsState, dispatch] = useReducer(NewsReducer, news.news);

  const filterNewsByDate = (date) => {
    dispatch({ type: 'FILTER_NEWS_BY_DATE', payload: date });
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
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export default NewsContextProvider;
