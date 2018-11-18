export function findItem(productId, list) {
  return list.find(({ id }) => id === productId);
}

export function findItemIndex(productId, list) {
  return list.findIndex(({ id }) => id === productId);
}

export function calculateTotal(selectedItems) {
  return selectedItems.reduce((acc, { price, quantity }) => {
    return acc + price * quantity;
  }, 0);
}
