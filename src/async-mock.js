import data from './data.json';

const fetchMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); 
  });
};

export default fetchMockData;