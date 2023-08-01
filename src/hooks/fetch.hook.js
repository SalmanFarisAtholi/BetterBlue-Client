import axios from "../axios/axios";
import { useEffect, useState } from "react";
// import { getUsername } from '../helper/helper'

/** custom hook */
export default function useFetch(query) {
    console.log(query);
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        // const { username } = !query ? await getUsername() : '';
        const { data, status } = await axios.get(`/${query}`);
        // !query ? await axios.get(`/api/user/${username}`) :
        if (status === 201) {
          setData((prev) => ({ ...prev, isLoading: false }));
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }

        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };
    fetchData();
  }, [query]);

  return [getData, setData];
}
