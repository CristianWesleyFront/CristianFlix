export function removeStorage(key) {
  try {
    localStorage.setItem(key, '');
  } catch (e) {
    console.log(
      'removeStorage: Error removing key [' +
        key +
        '] from localStorage: ' +
        JSON.stringify(e),
    );
    return false;
  }
  return true;
}

export function getStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    console.log(
      'getStorage: Error reading key [' +
        key +
        '] from localStorage: ' +
        JSON.stringify(e),
    );
    return null;
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log(
      'setStorage: Error setting key [' +
        key +
        '] in localStorage: ' +
        JSON.stringify(e),
    );
    return false;
  }
  return true;
}
