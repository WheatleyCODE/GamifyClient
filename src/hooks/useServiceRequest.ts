import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';

export function useServiceRequest<T>(request: () => Promise<AxiosResponse<T>>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const res = await request();

        setData(res.data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return [data, isLoading, error];
}
