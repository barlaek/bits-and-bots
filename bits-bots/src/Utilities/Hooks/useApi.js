import { useEffect, useState } from 'react';

/**
 * API Hook
 * @param {*} url
 * @returns data
 */
export function useApi(url) {
  /**
   * Initializes data state
   */
  const [data, setData] = useState([]);
  /**
   * Initializes loading state
   */
  const [loading, setLoading] = useState(false);
  /**
   * Initializes error state
   */
  const [error, setError] = useState(false);
  /**
   * Asynchronously fetches data from a REST API
   */
  useEffect(() => {
    async function getData() {
      try {
        /**
         * Sets loading state
         */
        setLoading(true);
        /**
         * Sets error state
         */
        setError(false);
        /**
         * Fetches data from REST API
         */
        const fetchData = await fetch(url);
        /**
         * Converts the JSON into readable data
         */
        const json = await fetchData.json();
        /**
         * Sets data state to converted JSON array
         */
        setData(json);
      } catch (error) {
        /**
         * Logs an error
         */
        console.log(error);
        /**
         * Sets the error state
         */
        setError(true);
      } finally {
        /**
         * Sets the loading state to false if "try" block is resolved
         */
        setLoading(false);
      }
    }
    /**
     * Function call, returns data and states
     */
    getData();
  }, [url]);

  return { data, loading, error };
}
