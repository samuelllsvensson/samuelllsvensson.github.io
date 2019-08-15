/**
 * GroupBy takes an array of objects 'list' and a property 'keyGetter'
 * The function is used to group detail/siteReports by category, name etc...
 */
export function GroupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
