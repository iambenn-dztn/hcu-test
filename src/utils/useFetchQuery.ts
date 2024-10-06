import { useEffect, useState } from 'react';
import { HttpError } from './error';

export const useFetchQuery = <T, S>(
  queryFn: (query?: S) => Promise<T>,
  initQuery?: S
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<HttpError | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  const handleFetch = () => {
    setIsLoading(true);

    queryFn(initQuery)
      .then((response) => {
        setData(response);
      })
      .catch((e: HttpError) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const refetch = () => {
    handleFetch();
  };

  useEffect(() => handleFetch(), []);

  return { isLoading, error, data, refetch };
};
