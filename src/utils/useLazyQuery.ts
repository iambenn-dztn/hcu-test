import { useState } from 'react';
import { HttpError } from './error';

export const useLazyQuery = <T, S>(queryFn: (query?: S) => Promise<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<HttpError | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);
  const onEvent = (query?: S) => {
    setIsLoading(true);
    setData(undefined);

    queryFn(query)
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

  return { isLoading, error, data, onEvent };
};
