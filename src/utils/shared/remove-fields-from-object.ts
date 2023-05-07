// export function removeFieldsFromObject<T, K extends keyof T> (object: T, keyToRemove: K) {}

// export function removeFieldsFromObject<T extends Record<string, any>, K extends keyof T>(
//   object: T,
//   ...keysToRemove: K[]
// ): Omit<T, K> {
//   const newObj = { ...object };

//   keysToRemove.forEach((key) => {
//     delete newObj[key];
//   });

//   return newObj as Omit<T, K>;
// }

export function removeFieldsFromObject<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keysToRemove: K | K[],
): Omit<T, K> {
  const keys = Array.isArray(keysToRemove) ? keysToRemove : [keysToRemove];
  const newObj = { ...object };

  keys.forEach((key) => {
    delete newObj[key];
  });

  return newObj as Omit<T, K>;
}
