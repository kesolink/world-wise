import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      if (res.ok) {
        const response = await res.json();
        setData(response);
        setLoading(false);
      } else {
        if (
          res.status === 400 ||
          res.status === 401 ||
          res.status === 402 ||
          res.status === 403 ||
          res.status === 404
        ) {
          setLoading(false);
          setError('Bad request or Invalid URL');
        } else if (
          res.status === 500 ||
          res.status === 501 ||
          res.status === 502 ||
          res.status === 503 ||
          res.status === 504
        ) {
          setLoading(false);
          setError('Something is wrong with the server');
        } else {
          setLoading(false);
          setError('Something went wrong');
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
