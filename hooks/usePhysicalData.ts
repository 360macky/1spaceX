import { useEffect, useState } from 'react';

export interface PhysicalData {
  data: any;
  result: any;
  setData: (data: any) => void;
}

export default function usePhysicalData(): PhysicalData {
  const [data, setData] = useState(null);
  const [result, setResult] = useState<string>('');

  const fetchData = async (api: string) => {
    const dataInLocalStorage = localStorage.getItem(data);
    if (dataInLocalStorage) {
      setResult(JSON.parse(dataInLocalStorage));
      return;
    } else {
      const response = await fetch(api);
      const responseData = await response.json();
      setResult(responseData);
      localStorage.setItem(data, JSON.stringify(responseData));
      return;
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const f = async () => {
      await fetchData(`https://api.spacexdata.com/v4/${data}`);
    };
    f();
    return () => {};
  }, [data]);

  return { data, result, setData };
}
