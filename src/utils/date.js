// Source: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// arr.sort(fonctionComparaison);
// Si fonctionComparaison(a, b) est inférieur à 0, on trie a avec un indice inférieur à b (a sera classé avant b)
// const compareDates = (objet1, objet2, mode = 'desc') => {
//   const dateObj1 = new Date(objet1.date);
//   const dateObj2 = new Date(objet2.date);

//   if (dateObj1 < dateObj2) {
//     return mode === 'desc' ? 1 : -1;
//   } else if (dateObj1 > dateObj2) {
//     return mode === 'desc' ? -1 : 1;
//   } else {
//     return 0;
//   }
// };

// export const SortArrayByDate = (array) => {
//   return array.sort(compareDates(objet1, objet2, (mode = 'desc')));
// };

export const SortArrayByDate = (objets, mode = 'asc') => {
  const compareDates = (objet1, objet2) => {
    const dateObj1 = new Date(objet1.date);
    const dateObj2 = new Date(objet2.date);

    if (dateObj1 < dateObj2) {
      return mode === 'desc' ? 1 : -1;
    } else if (dateObj1 > dateObj2) {
      return mode === 'desc' ? -1 : 1;
    } else {
      return 0;
    }
  };

  objets.sort(compareDates);

  return objets;
};
