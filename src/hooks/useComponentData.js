import { useEffect, useState } from 'react';

/**
 * @name useComponentData
 * @description Hook to get data from API or localStorage
 * @param {string} item - Item to get from localStorage
 * @param {string} api - API to get data
 * @returns {Object} Data from API or localStorage in JSON format
 */
export default function useComponentData({ item, api }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const f = async () => {
      const dataInLocalStorage = localStorage.getItem(item);
      if (dataInLocalStorage) {
        setData(JSON.parse(dataInLocalStorage));
      } else {
        const response = await fetch(api);
        const data = await response.json();
        setData(data);
        localStorage.setItem(item, JSON.stringify(data));
      }
    };
    f();
    return () => {};
  }, []);
  return data;
}
