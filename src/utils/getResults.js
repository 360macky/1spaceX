const getResults = (searchTerm, searchProperty, searchList) => {
  let resultsTerm = searchTerm[searchProperty];
  if (resultsTerm !== null) {
    let searchRegExp = new RegExp(searchList, 'i');
    if (resultsTerm.search(searchRegExp) !== -1) {
      return resultsTerm;
    }
  }
  return false;
};

export default getResults;
