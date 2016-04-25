export function selectBook(book) {
  // needs to return an action that is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};