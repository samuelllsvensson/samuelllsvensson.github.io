/**
 * SortBy takes a key selector 'selector' which then returns a function
 * depending on selected key.
 * The function is used to sort an array of objects by property and is usually combined
 * with a given sort-order from constants/sortOrder.js
 * Is used to sort sites, cow-lists, cameras and modules by priority and/or alphabetically
 */
export function SortBy(selector) {
  return (a, b) => {
    const valueA = selector(a);
    const valueB = selector(b);
    if (valueA < valueB) {
      return -1;
    }
    if (valueB < valueA) {
      return 1;
    }
    return 0;
  };
}
