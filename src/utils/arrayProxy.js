export const arrayProxy = {
  get: (array, prop) => {
    if(prop === 'length') return array.length;
    const { length } = array;
    const index = parseInt(prop);
    if(length === 0) return undefined;
    else if(index < 0) {
      const result = Math.abs(Math.floor(index / length)) * length;
      return array[index + result];
    } else if(index >= length) {
      const result = Math.floor(index / length) * length;
      return array[index - result];
    }
    return array[index];
  }
};