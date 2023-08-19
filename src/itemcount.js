export const items = (item) => item;

export const countitem = (item) => {
  document.getElementById('number').innerHTML = items(item);
};
