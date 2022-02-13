export const getLocalStrorage = (name) => {
  try {
    const obj = localStorage.getItem(name);
    return JSON.parse(obj);
  } catch (error) {
    return null;
  }
};

export const updateLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
