export const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};

export const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
