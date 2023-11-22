// Source: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// arr.sort(fonctionComparaison);

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
